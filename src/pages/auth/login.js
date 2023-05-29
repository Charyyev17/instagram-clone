import { useRef, useEffect } from "react"
import { Link, Navigate, useLocation } from "react-router-dom"
import { AiFillFacebook } from "react-icons/ai"
import { Formik, Form } from "formik"
import { Helmet } from "react-helmet"
import Input from "../../components/Input"
import { login } from "../../firebase.js"
import { LoginSchema } from "../../validations"
import { useSelector } from "react-redux"
import Footer from "../../components/Footer"

export default function Login () {
    
  const { user } = useSelector(state => state.auth)
  const ref = useRef()
  const location = useLocation()

  const images = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png" 
  ]

  useEffect(() => {
    let images = ref.current.querySelectorAll('img'),
        total = images.length,
        current = 0

    const imageSlider = () => {
      // eğer current sıfırdan büyükse bir önceki resimin classList'ine opacity-0 ekle yani gizle
      // eğer ilk resim gösteriliyorsa son resimi yani bir önceki resimin classList'ine opacity-0 ekle yani gizle
      images[(current > 0 ? current : total) - 1].classList.add('opacity-0')

      // şuanki resimi göster
      images[current].classList.remove('opacity-0')

      // eğer son image'e geldiyse current'i sıfırla
      // yoksa da current'i 1 arttır
      current = current === total -1 ? 0 : current + 1

    }

    imageSlider()
    let interval = setInterval(imageSlider, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [ref])

  // eğer user varsa anasayfaya ya da diğer sayfalara yönlendirme yapılıyor
  if (user) {
    return <Navigate to={location.state?.return_url || "/"} replace={true}/>
  }

  const submitHandle = async (values, actions) => {
    await login(values.username, values.password)
  }

  return (
    
    <div className="flex-wrap overflow-auto items-center justify-center">

      <Helmet>
        <title>
          Login • Instagram
        </title>
      </Helmet>

      <div className="h-full w-full flex gap-x-8 items-center justify-center">
      
        <div className="hidden md:block w-[380px] h-[581px] bg-login-image-pattern relative bg-[lenght:468.32_634.15px] bg-[top_left_-46px]">
          <div className="w-[250px] h-[538px] absolute top-[28px] right-[20px]" ref={ref}>
            {images.map((image, key) => (
              <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src={image} key={key} alt=""/>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <div className="w-[350px] bg-white border px-[40px] pt-10 pb-2">

            <a className="flex justify-center mb-8" href="#">
              <img className="h-[51px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt=""/>
            </a>

            <Formik
              initialValues={{
                username: "",
                password: ""
              }}
              onSubmit = { submitHandle }
              validationSchema={LoginSchema}
            >
              {({ isSubmitting, isValid, dirty, values }) => (

                <Form className="grid gap-y-1.5">
                  <Input name="username" label="Phone number, username or email" />
                  <Input name="password" type="password" label="Password" />

                  <button type="submit" 
                          disabled={!isValid || !dirty || isSubmitting}
                          className="h-[33px] bg-brand font-medium text-white text-sm rounded disabled:opacity-50 mt-2">
                    Log in
                  </button>

                  <div className="flex items-center mt-3">
                    <div className="h-[.5px] bg-gray-300 flex-1" />
                    <span className="px-4 text-[13px] text-gray-400 font-semibold">OR</span>
                    <div className="h-[.5px] bg-gray-300 flex-1" />
                  </div>

                  <a href="#" className="flex items-center justify-center text-sm text-facebook font-semibold gap-x-1 my-4">
                    <AiFillFacebook size={20}/>
                    Log in with Facebook
                  </a>

                  <a href="#" className="flex justify-center text-xs text-facebook mb-3">
                    Forgot password?
                  </a>
                </Form>

              )}
            </Formik>

            </div>

            <div className="flex items-center justify-center border text-sm bg-white gap-x-1 mt-2 p-5">
                Don't have an account?
                <Link to="/auth/signup" className="font-semibold text-signup">
                  Sign up
                </Link> 
            </div>

            <p className="mt-4 flex text-sm justify-center item-center">Get the app.</p>

            <div className="flex item-center justify-center gap-x-2 mt-4">
              <a href="#">
                <img className="w-[134px] h-[40px]" alt="" src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"/>
              </a>
              <a href="#">
                <img className="w-[110px] h-[40px]" alt="" src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"/>
              </a>
            </div>

        </div>

      </div>
      
    </div>
  );
}