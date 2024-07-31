import React from 'react';
import img1 from '../assets/pngwing1.jpg'

const Banner = () => {
    return (
        <div className='flex justify-between bg-[#1313130D] p-32 gap-10'>
            <div>
            <h1 className='text-[#131313] text-6xl font-bold'>Books to freshen up your bookshelf</h1>
            <button className='btn px-7 bg-[#23BE0A] rounded-lg mt-12'>View The List</button>
            </div>
            <div>
                <img src={img1} alt="" />
            </div>
        </div>
    );
};

export default Banner;