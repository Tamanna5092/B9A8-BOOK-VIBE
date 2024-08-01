import React from 'react';
import img1 from '../assets/pngwing1.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='flex justify-between bg-[#1313130D] p-32 gap-10 mt-10'>
            <div>
            <h1 className='playfair-display text-[#131313] text-6xl font-bold'>Books to freshen up <br /> your bookshelf</h1>
            <Link to={`/BookList`} className='btn px-7 py-4 text-white bg-[#23BE0A] rounded-lg mt-12'>View The List</Link>
            </div>
            <div>
                <img src={img1} alt="" />
            </div>
        </div>
    );
};

export default Banner;