import React from 'react';
import { CiStar } from 'react-icons/ci';

const Book = ({book}) => {
    const {image, bookName, author, category, rating} = book
    return (
        <div className='p-6 border rounded-2xl'>
            <div className='bg-[#F3F3F3] rounded-2xl py-10'>
            <img className='mx-auto' src={image} alt="" />
            </div>
            <div className='flex gap-11 mt-6 text-[#23BE0A] font-semibold'>
            <h4 className='bg-[#23BE0A0D] px-4 py-2 rounded-[30px] '>Young Adult</h4>
            <h4 className='bg-[#23BE0A0D] px-4 py-2 rounded-[30px]'>Identity</h4>
            </div>
            <h2 className='playfair-display text-[#131313] text-2xl font-bold my-4'>{bookName}</h2>
            <p className='text-{#131313} font-medium'>By: {author}</p>
            <hr className='my-5 border-dashed bg-[#13131326]' />
            <div className='flex justify-between'>
                <p className='text-{#131313} font-medium'>{category}</p>
                <p className='flex text-{#131313} font-medium'>{rating}<CiStar className='text-2xl'></CiStar></p>
            </div>
        </div>
    );
};

export default Book;