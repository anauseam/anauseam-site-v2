import { useState, useEffect } from "react";
import BookCard from "./BookCard";

function BooksList({ books = [] }) {
  const [sortBy, setSortBy] = useState("");
  const [sortedBooks, setSortedBooks] = useState(books);

  useEffect(() => {
    setSortedBooks(books);
  }, [books]);

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortBy(sortValue);

    let sorted = [...books];
    if (sortValue === "title_asc") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortValue === "title_desc") {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortValue === "author_asc") {
      sorted.sort((a, b) => a.author.localeCompare(b.author));
    } else if (sortValue === "author_desc") {
      sorted.sort((a, b) => b.author.localeCompare(a.author));
    }
    setSortedBooks(sorted);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <select
          className="py-2 px-4 border border-[var(--text-secondary)]/30 rounded-md bg-[var(--background-body)] text-[var(--text-main)] focus:border-[var(--primary-color)] focus:outline-none"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="">Sort by...</option>
          <option value="title_asc">Title (A-Z)</option>
          <option value="title_desc">Title (Z-A)</option>
          <option value="author_asc">Author (A-Z)</option>
          <option value="author_desc">Author (Z-A)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedBooks.map((book) => (
          <div key={book.id} className="h-full">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksList;
