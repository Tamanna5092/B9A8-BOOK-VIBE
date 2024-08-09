import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=''>
            <h1 className='text-center text-7xl font-bold mt-52'>404</h1>
            <h2 className='text-center text-3xl font-semibold'>Not found page!</h2>
            <div className='text-center'>
            <Link to="/" className='btn px-7 py-4 text-white bg-[#23BE0A] rounded-lg my-6'>Go Back to home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;