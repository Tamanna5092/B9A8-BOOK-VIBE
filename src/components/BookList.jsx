import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookList = () => {
    const books = useLoaderData();
    const { bookList } = useParams();
    const book = books.find(book => book.id === bookList);
    return (
        <div>
            <h2 className='text-center'>book</h2>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Read Books</span>
	</a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Wishlist Books</span>
	</a>
</div>
{/* card section  */}
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={book.image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{book.bookName}</h1>
      <p className="py-6">By: {book.author}</p>
      <div className='flex'>
        <p><span>Tags</span>#{book.tags}</p>
        <p><span>Year of Publishing: </span>{book.yearOfPublishing}</p>
      </div>
      <div className='flex'>
        <p><span>Publisher</span>{book.publisher}</p>
        <p><span>Page</span>{book.totalPages}</p>
      </div>
        <p>Category: {book.category}</p>
        <p>Rating: {book.rating}</p>
        <p>View Details</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookList;