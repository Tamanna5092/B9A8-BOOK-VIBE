const Sort = ({readBooks, setReadBooks, wishlistBooks, setWishlistBooks, tabIndex}) => {
  const handleBooksFilter = (e) => {
    const book = e.target.value;
    // read list books
    if (tabIndex === 0) {
        if (book === "rating") {
        const soreted = [...readBooks].sort((first, last) => last.rating - first.rating);
        setReadBooks(soreted);
      } else if (book === "totalPages") {
        const soreted = [...readBooks].sort((first, last) => last.totalPages - first.totalPages);
        setReadBooks(soreted);
      } else if (book === "yearOfPublishing") {
        const soreted = [...readBooks].sort((first, last) => last.yearOfPublishing - first.yearOfPublishing);
        setReadBooks(soreted);
      }
    }
    // wishlist books
    if (tabIndex === 1) {
        if (book === "rating") {
        const soreted = [...wishlistBooks].sort((first, last) => last.rating - first.rating);
        setWishlistBooks(soreted);
      } else if (book === "totalPages") {
        const soreted = [...wishlistBooks].sort((first, last) => last.totalPages - first.totalPages);
        setWishlistBooks(soreted);
      } else if (book === "yearOfPublishing") {
        const soreted = [...wishlistBooks].sort((first, last) => last.yearOfPublishing - first.yearOfPublishing);
        setWishlistBooks(soreted);
      }
    }
  };

  return (
    <div className="my-10 text-center">
      <select
        onChange={handleBooksFilter}
        className="select select-bordered bg-[#23BE0A] text-white font-semibold"
      >
        <option disabled selected>
          Sort By
        </option>
        <option value={"rating"}>Rating</option>
        <option value={"totalPages"}>Number of pages</option>
        <option value={"yearOfPublishing"}>Published year</option>
      </select>
    </div>
  );
};

export default Sort;
