import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';
const Register = () => {

const {
      createUser,setUser,
      loginWithGoogle
    } = use(AuthContext);

     console.log(createUser);

const  handleRegister=(e)=>{
  e.preventDefault();
    // console.log(e.target);
    const form = e.target;
  const formData = new FormData(form)
const email = formData.get('email');
const password = formData.get('password');
console.log(email,password);

if(password.length<6){
       Swal.fire({
      icon: 'error',
      title: 'Weak Password',
      text: 'Password must be at least 6 characters long.',
    });
    return;
      
  }
  if( !/[a-z]/.test(password)){
    Swal.fire({
      icon: 'error',
      title: 'Password Issue',
      text: 'Password must contain at least one lowercase letter.',
    });
    return;
}
if( !/[A-Z]/.test(password)){
   Swal.fire({
      icon: 'error',
      title: 'Password Issue',
      text: 'Password must contain at least one uppercase letter.',
    });
    return;
}

// create user in the firebase 
createUser(email, password)
   .then((result) =>{
    // console.log(result);
    const user = result.user;
    setUser(user);

 Swal.fire({
      icon: 'success',
      title: 'Registration Successful',
      text: 'Your account has been created successfully!',
      showConfirmButton: false,
      timer: 2000
    });

   })
   .catch(error =>{
    console.log(error);
   })

}  
// Google
const handleMygoogle = () =>{
  loginWithGoogle()
  .then(()=>{
    alert('succefully login in with google!')
  })
  .catch((error)=>{

  })
}
    return (
<div className="flex justify-center items-center min-h-screen px-4 bg-gradient-to-br from-[#FFF5FA] to-[#F3E8FF] mt-15">
  <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-4xl">
    {/* Card Section */}
    <div className="card w-full sm:w-[90%] md:w-[70%] lg:w-[50%] shadow-lg bg-white py-8 px-6 rounded-2xl border hover:shadow-2xl transition duration-300">
      
      {/* Heading */}
      <h2 className="font-bold text-base md:text-3xl text-center text-[#AD56C4] mb-6">
        Create Your Account
      </h2>

      {/* Form */}
      <form onSubmit={handleRegister} className="space-y-4">
        
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Full Name</label>
          <input
            name="name"
            type="text"
            className="input input-bordered w-full mt-1"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Photo URL */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Photo URL</label>
          <input
            name="photo"
            type="text"
            className="input input-bordered w-full mt-1"
            placeholder="Enter photo URL"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            className="input input-bordered w-full mt-1"
            placeholder="Enter email"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Password</label>
          <input
            name="password"
            type="password"
            className="input input-bordered w-full mt-1"
            placeholder="Enter password"
            required
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="btn bg-[#AD56C4] hover:bg-[#f000b8] text-white w-full mt-4 rounded-lg"
        >
          Register
        </button>

        {/* Login Link */}
        <p className="text-center font-medium text-gray-600 text-sm mt-2">
          Already have an account?{" "}
          <Link className="text-[#f000b8] font-semibold hover:underline" to="/auth/login">
            Login
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-2 my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Auth Button */}
        <button
          onClick={handleMygoogle}
          className="btn btn-outline w-full flex items-center justify-center gap-1 hover:shadow-md"
        >
            Register with 
          <FcGoogle className="text-base" />
        </button>
      </form>
    </div>
  </div>
</div>


    );
};

export default Register;