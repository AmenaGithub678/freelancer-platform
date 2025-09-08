import { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

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

 Swal.fire({
      icon: 'success',
      title: 'Login Successfully!!',
      text: 'You have successfully logged in!',
      showConfirmButton: false,
      timer: 2000
    });      

      navigate(location?.state ? location.state : "/")
     })
     .catch((error)=>{
      const errorCode = error.code;
Swal.fire({
    icon: 'error',
    title: 'Login Failed',
    text: error.message || 'Invalid credentials!',
  });
     });


 }
//  google 
const handlewhithMygoogle = () => {
  loginWithGoogle()
  .then(()=>{
    Swal.fire({
      icon: 'success',
      title: 'Login Successful',
      text: 'You have logged in with Google!',
      showConfirmButton: false,
      timer: 2000
    });
  })
  .catch((error)=>{
 Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message || 'Something went wrong with Google login!'
    });
  })
}
    return (
<div className="relative flex justify-center min-h-screen items-center bg-gradient-to-br from-[#FFF5FA] to-[#F3E8FF] mt-15 ">
      
      {/* 🔙 Go Back Button - Top Left */}
      <Link to="/" className="absolute top-5 left-5 ">
        <button className="btn btn-error btn-sm rounded-full shadow-md hover:scale-105 transition">
          ⬅ Home
        </button>
      </Link>

      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="card w-full max-w-lg shadow-xl bg-white p-6 rounded-2xl">
          
          {/* Title */}
          <h2 className="font-bold text-2xl text-center text-[#AD56C4]">
            Welcome Back 👋
          </h2>
          <p className="text-sm text-center text-gray-500 mb-3">
            Please login to continue
          </p>

          {/* Form */}
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset space-y-3">
              
              {/* Email */}
              <label className="label font-semibold">Email</label>
              <input
                ref={refEmail}
                name="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                value={useEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />

              {/* Password */}
              <label className="label font-semibold">Password</label>
              <input
                name="password"
                type="password"
                className="input input-bordered w-full"
                placeholder="Enter your password"
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="btn bg-[#AD56C4] text-white hover:bg-[#f000b8] mt-2"
              >
                Login
              </button>

              {/* Forgot Password */}
              <button
                type="button"
                className="text-sm text-secondary hover:underline mx-auto"
              >
                Forgot Password?
              </button>

              {/* Register Redirect */}
              <p className="text-center font-medium text-gray-600 text-sm ">
                Don’t have an account?{" "}
                <Link className="text-[#AD56C4] hover:underline font-bold" to="/auth/register">
                  Register
                </Link>
              </p>

              {/* Divider */}
              <div className="divider text-sm">OR</div>

              {/* Google Login */}
              <button
                onClick={handlewhithMygoogle}
                type="button"
                className="btn btn-outline w-full flex items-center justify-center  hover:bg-gray-100"
              >
                Continue with 
                <FcGoogle className="text-sm" />
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;