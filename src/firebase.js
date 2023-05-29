import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
import { toast } from "react-hot-toast"
import { userHandle } from "./utils";

const firebaseConfig = {
  apiKey: "AIzaSyAfjwq2Nnj-H_gAQfUrKItD6p2guU25qUU",
  authDomain: "instagram-clone-chasy.firebaseapp.com",
  projectId: "instagram-clone-chasy",
  storageBucket: "instagram-clone-chasy.appspot.com",
  messagingSenderId: "568387725534",
  appId: "1:568387725534:web:f1f326b94192a962233a4f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app)


// profile.js'de user'in bilgilerine erişmek için kullanılan func
export const getUserInfo = async username => {

    // ilk olarak usernames tablosunda giriş yapan user varmı, onu kontrol ediyor
    const user = await getDoc(doc(db, "usernames", username))
    
    if (user.exists()) {
      // eğer öyle user varsa onun id'sine eşit olan user'in biligilerini users tablosundan getiriyor
      // ve profile sayfasına geri döndürüyor
      return (await getDoc(doc(db, "users", user.data().user_id))).data()
    } else {
      toast.error("User doesn't exist")
      throw new Error("User doesn't exist")
    }
}


// user'in oturum açma durumundaki değişiklikler için bir gözlemci ekler.
onAuthStateChanged(auth, async user => {
  if (user) {
    // giriş yapan user.uid'a ait bilgiler database'den çekiliyor
    const dbUser = await getDoc(doc(db, "users", user.uid))
    let data = {
      uid: user.uid,
      full_name: user.full_name,
      number_email: user.email,
      emailVerified: user.emailVerified,
      // ve diğer veriler
      ...dbUser.data()
    }
    // util.js içerisindeki userHandle'e data'yı gönderiyor
    userHandle(data)
  } else {
    // user yoksa util.js içerisindeki userHandle'e false gönderiyor
    userHandle(false)
  }
})


// kullanıcı giriş yaptığında çalışan func
export const login = async (email, password) => {
  try {
    //login sayfasında butona tıklandığında çalışan firebase/auth fonku
    return await signInWithEmailAndPassword(auth, email, password)

  } catch (err) {
    toast.error(err.code)
  }
}


// kullanıcı signup yaptığında çalışan func
export const signup = async ({ email, password, username, fullName }) => {
  try {

    // database'deki usernames tablosundan varsa girilen username'i çekiyor
    const user = await getDoc(doc(db, "usernames", username))

    // eğer varsa hata verir
    if (user.exists()) {

      toast.error(`username is already taken by someone else`)

    } else {

      // yoksa da girilen bilgiler ile bir kullanıcı oluşturulur
      const response = await createUserWithEmailAndPassword(auth, email, password)

      if (response.user) {

        // eğer hatasız bir şekilde user oluşturulursa girilen username, database'deki usernames tablosuna eklenir
        await setDoc(doc(db, "usernames", username), {
          user_id: response.user.uid
        })

        // eğer hatasız bir şekilde user oluşturulursa database'deki users tablosuna girilen bilgiler eklenir
        await setDoc(doc(db, "users", response.user.uid), {
          fullName,
          username,
          followers: [],
          following: [],
          notifications: [],
          website: '',
          bio: '',
          phoneNumber: '',
          posts: 0
    
        })
    
        await updateProfile(auth.currentUser, {
          displayName: fullName
        })
    
        return response.user
      } 
    }

  } catch (err) {
    toast.error(err.code)
  }
}


// kullanıcı çıkış yaptığı zaman çalışan func
export const logout = async () => {
  try {
    await signOut(auth)
  } catch (err) {
    toast.error(err.code)
  }
}