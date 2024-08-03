import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {image, bookName, author, category, rating, tags, bookId} = book
    return (
        <div className='p-6 border rounded-2xl'>
            <Link to={`/book/${bookId}`}>
            <div className='bg-[#F3F3F3] rounded-2xl py-10'> 
            <img className='mx-auto' src={image} alt="" /> 
            </div>
            <div className='flex gap-6  rounded-[30px] text-[#23BE0A]  font-semibold'>
                {
                    tags.map(tag => <h4 className='bg-[#23BE0A0D] mt-6 px-4 py-2' key={tag}>{tag}</h4>)
                }
            </div>
            <h2 className='playfair-display text-[#131313] text-2xl font-bold my-4'>{bookName}</h2>
            <p className='text-[#131313] font-medium'>By: {author}</p>
            <hr className='my-5 border-dashed bg-[#13131326]' />
            <div className='flex justify-between'>
                <p className='text-[#131313] font-medium'>{category}</p>
                <p className='flex text-[#131313] font-medium'>{rating}<CiStar className='text-2xl'></CiStar></p>
            </div>
            </Link>
        </div>
    );
};

export default Book;