import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PageToRead = () => {
    const books = useLoaderData()
    console.log(books)
    return (
        <div>
            this is read page list
        </div>
    );
};

export default PageToRead;