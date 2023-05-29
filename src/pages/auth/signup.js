import { Link, useLocation, useNavigate } from "react-router-dom"
import { AiFillFacebook } from "react-icons/ai"
import { Formik, Form } from "formik"
import Input from "../../components/Input"
import { signup } from "../../firebase.js"
import { SignupSchema } from "../../validations"
import { Helmet } from "react-helmet"

export default function Signup () {
    
  const navigate = useNavigate()
  const location = useLocation()

  const submitHandle = async (values, actions) => {
    const response = await signup(values)
    
    if (response) {
      navigate(location.state?.return_url || '/', {
        replace: true
      })
    }
  }

  return (
    <div className="flex-wrap overflow-auto items-center justify-center">

      <Helmet>
        <title>
          Signup • Instagram
        </title>
      </Helmet>

      <div className="h-full w-full flex items-center justify-center">

        <div>
          <div className="w-[350px] bg-white border px-[40px] pt-12 pb-2">

            <a className="flex justify-center mb-2" href="#">
              <img className="h-[51px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt=""/>
            </a>

            <p className="text-center font-semibold text-[17px] text-[#8e8e8e] mb-4">
              Sign up to see photos and videos from your friends.
            </p>

            <div className="flex items-center justify-center">
              <button type="submit"className="h-[33px] w-full py-[7px] px-[16px] bg-[#0095f6] rounded flex items-center justify-center text-white text-sm text-facebook font-semibold gap-x-1">
                <AiFillFacebook size={20}/>
                Log in with Facebook
              </button>
            </div>

            <div className="flex items-center my-4">
              <div className="h-[.5px] bg-gray-300 flex-1" />
              <span className="px-4 text-[13px] text-gray-400 font-semibold">OR</span>
              <div className="h-[.5px] bg-gray-300 flex-1" />
            </div>

            <Formik
              initialValues={{
                email: "",
                fullName: "",
                username: "",
                password: ""
              }}
              onSubmit = { submitHandle }
              validationSchema={SignupSchema}
            >
              {({ isSubmitting, isValid, dirty, values }) => (

                <Form className="grid gap-y-1.5">
                  
                  <Input name="email" label="Mobile Number or Email" />
                  <Input name="fullName" label="Full Name" />
                  <Input name="username" label="Username" />
                  <Input name="password" type="password" label="Password" />

                  <div className="text-xs text-center text-gray-400 mt-2">
                    People who use our service may have uploaded your contact information to Instagram.{' '}
                    <a href="#" className="text-xs font-semibold text-facebook mb-2">
                      Learn More
                    </a>
                  </div>

                  <div className="text-xs text-center text-gray-400 mt-2">
                    By signing up, you agree to our {' '}
                    <a href="#" className="text-xs font-semibold text-facebook">
                      Terms
                    </a>
                    {' , '}
                    <a href="#" className="text-xs font-semibold text-facebook">
                      Privacy Policy
                    </a>
                    {' and '}
                    <a href="#" className="text-xs font-semibold text-facebook">
                      Cookies Policy
                    </a>
                    {' .'}

                  </div>

                  <button type="submit" 
                          disabled={!isValid || !dirty || isSubmitting}
                          className="h-[33px] bg-brand font-medium text-white text-sm rounded disabled:opacity-50 mt-2 mb-8">
                    Sign up
                  </button>
                  
                </Form>

              )}
            </Formik>

            </div>

            <div className="flex items-center justify-center border text-sm bg-white gap-x-1 mt-2 p-6">
                Have an account?
                <Link to="/auth/login" className="font-semibold text-signup">
                  Log in
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