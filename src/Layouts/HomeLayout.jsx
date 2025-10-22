import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer/Footer';


const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main className='container mx-auto'>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default HomeLayout;