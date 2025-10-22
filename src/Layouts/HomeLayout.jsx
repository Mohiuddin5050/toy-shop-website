import React from 'react';

import { Outlet } from 'react-router';
import Navbar from '../component/Navbar/Navbar';

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

            </footer>
        </div>
    );
};

export default HomeLayout;