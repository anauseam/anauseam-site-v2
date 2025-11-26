import React from 'react';
import Breadcrumbs from "./Breadcrumbs";

function BookDetail({ book, relatedBooks = [] }) {
  const breadcrumbItems = [
    { label: "Library", href: "/library" },
    ...(book.genre ? [{ label: book.genre, href: `/library/genre/${encodeURIComponent(book.genre)}` }] : []),
    { label: book.title, href: null }
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />

      <div className="space-y-12 mt-6">
        <div className="bg-[var(--background-body)] rounded-lg border border-[var(--text-secondary)]/20 p-6">
          <div className="md:flex gap-10">
            <div className="md:w-1/3 lg:w-1/4 flex-shrink-0 mb-8 md:mb-0 h-80 flex items-center justify-center bg-gray-100/10 rounded-md">
              <img
                src={book.image_url}
                alt={book.title}
                className="max-h-full max-w-full object-contain shadow-sm"
              />
            </div>
            <div className="md:w-2/3 lg:w-3/4">
              <h1 className="text-3xl font-serif font-bold mb-3 text-[var(--text-main)]">{book.title}</h1>
              <h2 className="text-xl text-[var(--text-secondary)] mb-6 font-serif font-normal">
                by {book.author}
              </h2>

              {book.genre && (
                <div className="mb-6">
                  <a
                    href={`/library/genre/${encodeURIComponent(book.genre)}`}
                    className="inline-block border border-[var(--primary-color)] text-[var(--primary-color)] text-sm px-3 py-1 rounded-full font-sans cursor-pointer hover:bg-[var(--primary-color)]/10 no-underline transition-colors"
                  >
                    {book.genre}
                  </a>
                </div>
              )}

              <p className="text-[var(--text-main)] leading-relaxed text-lg">
                {book.description}
              </p>
            </div>
          </div>
        </div>

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <section className="mb-12">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-[var(--text-main)]">
              {book.genre
                ? `Other Books in ${book.genre}`
                : "You May Also Like"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
              {relatedBooks.map((relBook) => (
                <a
                  key={relBook.id}
                  href={`/library/book/${relBook.id}`}
                  className="bg-[var(--background-body)] rounded-lg border border-[var(--text-secondary)]/20 py-4 px-5 text-center cursor-pointer hover:border-[var(--text-secondary)] transition-colors block no-underline group"
                >
                  <div className="w-24 h-32 mx-auto mb-3 flex items-center justify-center">
                    <img
                      src={relBook.image_url}
                      alt={relBook.title}
                      className="max-h-full max-w-full object-contain shadow-sm group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="font-serif text-[var(--text-main)] mb-1 line-clamp-1 font-medium">
                    {relBook.title}
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm font-sans">
                    {relBook.author}
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default BookDetail;
