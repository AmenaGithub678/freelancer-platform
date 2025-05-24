import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { FcGoogle } from "react-icons/fc";
const Register = () => {

    const {
      createUser,setUser,
      loginWithGoogle
    } = use(AuthContext)
     console.log(createUser);

const  handleRegister=(e)=>{
  e.preventDefault();
    // console.log(e.target);
    const form = e.target;
  const formData = new FormData(form)
const email = formData.get('email');
const password = formData.get('password');
console.log(email,password);


// create user in the firebase 
createUser(email, password)
   .then((result) =>{
    // console.log(result);
    const user = result.user;
    setUser(user);
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
<div className="flex justify-center min-h-screen items-center"
    //   style={{
    //     backgroundImage: `url(${bgImage})`,
    //   }}
      >
      <div className="hero-content flex-col lg:flex-row-reverse">       
      <div className="card w-full max-w-lg shadow-2xl bg-white py-8 px-6 rounded-lg">
      <h2 className="font-semibold text-lg text-center">
         Create Your Account
        </h2>
<form 
onSubmit={handleRegister} 

className="card-body">
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />


            {/* Photo URl  */}
   <label className="label">
    Photo URl </label>
    <input
    name="photo"
    type="text"
    className="input"
    placeholder="Photo URl"
    required
    />

    {/* email  */}
    <label className="label">Email</label>
      <input
        name="email"
        type="email"
        className="input"
        placeholder="Email"
        required
         />

       {/* password  */}
   <label className="label">Password</label>
        <input
         name="password"
         type="text"
         className="input"
         placeholder="Password"
         required
            />

    <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
      Have An Account ? just{" "} 
 <Link className="text-secondary" to="/auth/login">
      Login
    </Link>
   </p>
 <p className='text-center font-semibold'>Or</p>
 <div className="mt-1">
  <button 
  
  onClick={handleMygoogle} 
  
  className="btn btn-outline w-full flex items-center justify-center gap-2">
  Register 
    <FcGoogle className="text-xl" />
  </button>
</div>           
          </fieldset>
        </form>
                </div>
              </div>
            </div>
    );
};

export default Register;