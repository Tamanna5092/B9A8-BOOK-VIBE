import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, [])

    return (
        <div>
           <div>
           <h1 className='text-[#131313] text-4xl text-center font-bold mb-9'>Books: {books.length}</h1>
           </div>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                books.map(book => <Book key={book.id} book={book}></Book>)
            }
           </div>
        </div>
    );
};

export default Books;