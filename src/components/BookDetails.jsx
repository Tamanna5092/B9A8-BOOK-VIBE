import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const bookDetails = useLoaderData();
    const {bookId} = useParams()
    const book = bookDetails.find(book => book.bookId === bookId);
    
    return (
        <div className='grid gap-12 sm:grid-cols-1 md:grid-cols-2 my-14'>
            <div className='bg-[#1313130D] mx-auto p-20 rounded-2xl'>
                <img className='w-[425px] h-[564px]' src={book.image} alt="" />
            </div>
            <div>
            <h1 className='playfair-display text-[#131313] text-4xl font-bold mb-4'>{book.bookName}</h1>
            <h4 className='text-[#131313CC] text-xl font-medium mb-6'>By: {book.author}</h4>
            <hr className='text-[#13131326]' />
            <p className='text-[#131313CC] text-xl font-medium my-4'>{book.category}</p>
            <hr className='text-[#13131326]' />
            <p className='text-[#131313B2] font-extralight my-6'><span className='text-[#131313]  font-bold'>Review: </span>{book.review}</p>
            <p className=' text-[#23BE0A] font-medium mb-6'><span className='text-[#131313] font-bold'>Tag</span>#{book.tags}</p>
            <hr className='text-[#13131326]' />
            <div className='flex gap-20 my-6'>
                <div className='space-y-3'>
                    <p className='text-[#131313B2]'>Number of Pages:</p>
                    <p className='text-[#131313B2]'>Publisher:</p>
                    <p className='text-[#131313B2]'>Year of Publishing:</p>
                    <p className='text-[#131313B2]'>Rating:</p>
                </div>
                <div className='space-y-3'>
                <p className='text-[#131313] font-semibold'>{book.totalPages}</p>
                <p className='text-[#131313] font-semibold'>{book.publisher}</p>
                <p className='text-[#131313] font-semibold'>{book.yearOfPublishing}</p>
                <p className='text-[#131313] font-semibold'>{book.rating}</p>
                </div>
            </div>
            <div className=''>
            <button className="btn text-[#131313] text-lg font-semibold px-7 bg-[#fff] border-1 border-stone-600 rounded-lg">Read</button>
            <button className="btn text-[#FFFFFF] text-lg font-semibold px-7 bg-[#50B1C9] rounded-lg ml-4">Wishlist</button>
            </div>
            </div>
        </div>
    );
};

export default BookDetails;