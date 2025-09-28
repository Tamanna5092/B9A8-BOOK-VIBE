import toast from "react-hot-toast";

export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    return (books = JSON.parse(storedBooks));
  } else {
    return books
  }
};

export const getReadBook = () => {
  let readBooks = [];
  const storedReadBooks = localStorage.getItem("readBooks");
  if (storedReadBooks) {
    readBooks = JSON.parse(storedReadBooks);
  }
  return readBooks
};

export const getWishListBook = () => {
    let wishList = []
    const storedWishListBooks = localStorage.getItem("wishlistBooks")
    if(storedWishListBooks){
        wishList = JSON.parse(storedWishListBooks)
    }
    return wishList
}

// read book
export const saveReadBook = (book) => {
    let readList = getReadBook()
    let wishlist = getWishListBook()

    const isExistReadList = readList.find((b) => b.bookId === book.bookId)
    const isExistWishList = wishlist.find((b) => b.bookId === book.bookId)

  if (isExistReadList) {
    return toast.error("Already Read!");
  }
  else if(isExistWishList){
    return toast.error("Already Wishlisted!")
  }
  else {
    readList.push(book);
    localStorage.setItem("readBooks", JSON.stringify(readList));
    toast.success("Book successfully added!");
  }
}


// wishlist book
export const saveWishlist = (book) => {
    let readList = getReadBook()
    let wishlist = getWishListBook()

    const isExistReadList = readList.find((b) => b.bookId === book.bookId)
    const isExistWishList = wishlist.find((b) => b.bookId === book.bookId)

  if (isExistWishList) {
    return toast.error("Already Wishlisted!");
  }
  else if(isExistReadList){
    return toast.error("Already ReadList!")
  }
  else {
    wishlist.push(book);
    localStorage.setItem("wishlistBooks", JSON.stringify(wishlist));
    toast.success("Book successfully added!");
  }
}
