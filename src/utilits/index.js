import toast from "react-hot-toast";

export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};

// read book
export const saveReadBook = (book) => {
  let books = getBooks();
  const isExist = books.find((b) => b.bookId === book.bookId);
  if (isExist) {
    return toast.error("Already Read!");
  }
  else {
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    toast.success("Book successfully added!");
  }
};

// wishlist
export const saveWishlist = (book) => {
  let books = getBooks();
  const isExist = books.find((b) => b.bookId === book.bookId);
  if (isExist) {
    return toast.error("Already Wishlisted!");
  }
  else {
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    toast.success("Book successfully Wishlisted!");
  }
};