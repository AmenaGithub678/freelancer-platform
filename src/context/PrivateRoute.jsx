import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../Componets/LoadingSpinner';

const PrivateRoute = ({children}) => {
   
    const {user, loading,} = use(AuthContext);
//  console.log(user,loading);

const location = useLocation()

if(loading){
    return <LoadingSpinner></LoadingSpinner>
}
    if(user && user ?.email){
return children;
    }
    return <Navigate
    state={location.pathname} to ='/auth/login'></Navigate>
     
};

export default PrivateRoute;