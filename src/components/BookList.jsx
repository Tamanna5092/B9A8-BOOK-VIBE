import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import { getReadBook, getWishListBook } from "../utilits";
import Sort from "./Sort";

const BookList = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  // read list
  useEffect(() => {
    const storedBook = getReadBook();
    setReadBooks(storedBook);
  }, []);
  console.log("read list books", readBooks);

  // wishlist book
  useEffect(() => {
    const storedBook = getWishListBook();
    setWishlistBooks(storedBook);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Book Vibe | Listed Book</title>
      </Helmet>
      <h2 className="text-[#131313] text-3xl font-bold text-center bg-[#1313130D] py-8 my-10">
        Books
      </h2>
      {/* sort data */}
      <Sort
        readBooks={readBooks}
        setReadBooks={setReadBooks}
        wishlistBooks={wishlistBooks}
        setWishlistBooks={setWishlistBooks}
        tabIndex={tabIndex}
      ></Sort>
      <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
          to={""}
          onClick={() => setTabIndex(0)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 text-[#131313CC] px-5 py-3 space-x-2 ${
            tabIndex === 1
              ? "border-2 border-b-0 rounded-t-lg"
              : "border-b text-[#23BE0A]"
          } dark:border-gray-600 dark:text-gray-600`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          to={`wishlist`}
          onClick={() => setTabIndex(1)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 text-[#13131380] px-5 py-3 space-x-2 ${
            tabIndex === 0
              ? "border-2 border-b-0 rounded-t-lg"
              : "border-b text-[#23BE0A]"
          } dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
      </div>
      <Outlet context={{ readBooks, wishlistBooks }}></Outlet>
    </div>
  );
};

export default BookList;
