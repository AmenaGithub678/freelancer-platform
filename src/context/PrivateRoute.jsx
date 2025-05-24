import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
   
    const {user, loading,} = use(AuthContext);
 console.log(user,loading);
if(loading){
    return <span className="loading loading-infinity loading-xl"></span>
}
    if(user && user ?.email){
return children;
    }
    return <Navigate to ='/auth/login'></Navigate>
     
};

export default PrivateRoute;