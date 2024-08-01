import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

const Root = () => {
    return (
        <div className='work-sans'>
            <div className=' max-w-7xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;