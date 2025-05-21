import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Componets/Footer';
import Banner from '../Componets/Banner';
import Home from '../Pages/Home';
import NavBar from '../Componets/NavBar';

const MainLayouts = () => {
    return (
        <div>
<header>
<NavBar></NavBar>
<Banner></Banner>
</header>

<main>
<Outlet></Outlet>  
</main>
<Footer></Footer>
        </div>
    );
};

export default MainLayouts;
