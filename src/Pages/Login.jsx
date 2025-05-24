import { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
const {signIn,
loginWithGoogle
} = use(AuthContext)
    
const refEmail = useRef()
const [useEmail, setUserEmail] = useState("");

 // location
  const location = useLocation()

   const navigate = useNavigate();

 const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
     console.log({ email, password });

     signIn(email,password)
     .then((result)=>{
      const user = result.user;
      console.log(user);

      navigate(location?.state ? location.state : "/")
     })
     .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.errorMessage;
      alert(errorCode,errorMessage)
     });


 }
//  google 
const handlewhithMygoogle = () => {
  loginWithGoogle()
  .then(()=>{
    alert('successfully login with google!!')
  })
  .catch((error)=>{

  })
}
    return (
<div>
<div className="flex justify-center min-h-screen items-center"
        // style={{
        //   backgroundImage: `url(${bgImage})`,
        // }}
        >
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className="card w-full max-w-lg shadow-2xl bg-white py-8 px-6 rounded-lg">
  <h2 className="font-semibold text-lg text-center">
    Login
  </h2>
  <form 
  onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                {/* email  */}
                <label className="label">Email</label>
                <input
                  ref={refEmail}
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  value={useEmail}
                  onChange={(e) => setUserEmail(e.target.value)}

                  required
                />
                {/* passowrd  */}
                <label className="label">Password</label>
                <input
                  name="password"
                  type="text"
                  className="input"
                  placeholder="Password"
                  required
                />

                {/* {error && <p className="text-red-400 text-xs">{error}</p>} */}

                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
                <p className="font-semibold text-center pt-5">
                  Dont’t Have An Account ?{" "}
                  <Link className="text-secondary" to="/auth/register">
                    Register
                  </Link>
                </p>
                {/* google */}
                <p className='text-center font-semibold'>Or</p>
                <div className="mt-1">

  <button 
    onClick={handlewhithMygoogle} 

className="btn btn-outline w-full flex items-center justify-center gap-2">
                     Login 
     <FcGoogle className="text-xl" />

                   
                  </button>
                </div>

                <Link to="/" className='mx-auto mt-2'>
                  <button className="btn btn-error">Go Back to home</button>
                </Link>

              </fieldset>
            <button 

            // onClick={handleResetPassward}

              className='btn btn-soft'>
              Forgot Password
            </button>
            </form>


          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;