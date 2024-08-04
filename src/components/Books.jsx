import React, { useEffect, useState } from "react";
import Book from "./Book";
import { useLoaderData } from "react-router-dom";

const Books = () => {
  const [dataLength, setDataLength] = useState(6);
  const books = useLoaderData();

  return (
    <div className="my-24">
      <div>
        <h1 className="text-[#131313] text-4xl text-center font-bold mb-9">
          Books
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.slice(0, dataLength).map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
      <div className={dataLength === books.length && "hidden"}>
        <div className="text-center  mt-6">
          <button
            onClick={() => setDataLength(books.length)}
            className="btn px-7 py-4 text-white bg-[#23BE0A] rounded-lg"
          >
            See All Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
