import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookList = () => {
    const books = useLoaderData();
    console.log(books)
    return (
        <div>
            <h2>book</h2>
        </div>
    );
};

export default BookList;