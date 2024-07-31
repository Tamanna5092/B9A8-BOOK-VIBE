import React from 'react';

const Book = ({book}) => {
    const {image, bookName, author, category, rating} = book
    return (
        <div className=''>
            <img src={image} alt="" />
            <h2 className='text-[#131313] text-2xl font-bold my-4'>{bookName}</h2>
            <p className='text-{#131313} font-medium'>By: {author}</p>
            <hr className='my-5 border-dashed bg-[#13131326]' />
            <div className='flex'>
                <p className='text-{#131313} font-medium'>{category}</p>
                <p className='text-{#131313} font-medium'>{rating}</p>
            </div>
        </div>
    );
};

export default Book;