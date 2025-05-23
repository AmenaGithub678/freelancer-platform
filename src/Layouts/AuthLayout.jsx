import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Componets/NavBar';
import Footer from '../Componets/Footer';

const AuthLayout = () => {
    return (
        
          <div className='mx-auto'>
            <NavBar></NavBar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>

        
    );
};

export default AuthLayout;