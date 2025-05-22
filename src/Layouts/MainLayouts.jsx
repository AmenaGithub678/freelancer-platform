import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Componets/Footer';
import NavBar from '../Componets/NavBar';

const MainLayouts = () => {
    return (
        <div>
<header>
<NavBar></NavBar>

</header>
<main>
<Outlet></Outlet>  
</main>
<Footer></Footer>
        </div>
    );
};

export default MainLayouts;
