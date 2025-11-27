import React from 'react';

function BookCard({ book }) {
  return (
    <a href={`/library/book/${book.id}`} className="block no-underline text-inherit h-full">
      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg overflow-hidden transition-all hover:border-[var(--card-border-hover)] flex flex-col h-full shadow-sm">
        <div className="h-60 overflow-hidden flex justify-center items-center bg-[var(--card-image-bg)] p-4 border-b border-[var(--card-border)]">
          <img
            src={book.image_url}
            alt={book.title}
            className="h-full w-auto object-contain shadow-sm transition-transform hover:scale-[1.03] duration-300"
          />
        </div>
        <div className="p-5 space-y-3 flex flex-col flex-grow">
          <h3 className="text-lg font-serif mb-1 line-clamp-1 text-[var(--text-main)]">{book.title}</h3>
          <p className="text-[var(--text-secondary)] text-sm mb-2">
            Author: {book.author}
          </p>
          <p className="text-[var(--text-main)] text-sm overflow-hidden line-clamp-3 mb-4 flex-grow opacity-90">
            {book.description}
          </p>
          <span className="block w-full py-2 text-center text-sm font-bold text-white bg-[var(--btn-primary-bg)] rounded hover:opacity-90 transition-opacity">
            Learn more
          </span>
        </div>
      </div>
    </a>
  );
}

export default BookCard;
