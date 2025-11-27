import React, { useState } from 'react';

function BookDetailModal({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-[var(--card-bg)] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl flex flex-col md:flex-row relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/10 hover:bg-black/20 text-[var(--text-main)] transition-colors"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="w-full md:w-1/2 h-64 md:h-auto bg-[var(--card-image-bg)] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[var(--card-border)]">
           <img
            src={book.image_url}
            alt={book.title}
            className="max-h-full max-w-full object-contain shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <div className="mb-auto">
             <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-[var(--primary-color)] uppercase bg-[var(--primary-color)]/10 rounded-full mb-4">
              {book.genre}
            </span>
            <h2 className="text-3xl font-serif font-bold text-[var(--text-main)] mb-2 leading-tight">{book.title}</h2>
            <p className="text-[var(--text-secondary)] text-lg mb-6 font-medium">{book.author}</p>
            
            <div className="prose prose-sm text-[var(--text-main)] opacity-90 leading-relaxed">
              <p>{book.description}</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--card-border)]">
             <a 
               href="#" 
               className="block w-full py-3 text-center font-bold text-white bg-[var(--btn-primary-bg)] rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
             >
               Visit Project
             </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetailModal;

