import React from 'react';

function Sidebar({ genres = [], activeGenre, counts = true }) {
  return (
    <aside className="w-[280px] border-r border-[var(--sidebar-border)] bg-[var(--sidebar-bg)] pt-10 pb-6 overflow-y-auto fixed top-0 left-0 bottom-0 z-50 hidden md:block">
      <div className="font-serif text-lg font-semibold px-6 mb-8 text-[var(--text-main)]">Library</div>

      <nav className="space-y-1 px-3">
        <a
          href="/library"
          className={
            !activeGenre
              ? "block px-3 py-2 bg-[var(--sidebar-active-bg)] text-[var(--sidebar-active-text)] font-medium rounded-lg font-sans text-sm no-underline"
              : "block px-3 py-2 text-[var(--text-main)] hover:bg-[var(--sidebar-hover-bg)] rounded-lg transition-colors font-sans text-sm no-underline"
          }
        >
          All Books
        </a>

        <div className="pt-6 pb-2">
          <div className="px-6 mb-2 text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Genres</div>
          {genres.map((genre) => (
            <a
              key={genre.name}
              href={`/library/genre/${encodeURIComponent(genre.name)}`}
              className={
                activeGenre === genre.name
                  ? "block px-3 py-2 bg-[var(--sidebar-active-bg)] text-[var(--sidebar-active-text)] font-medium rounded-lg font-sans text-sm no-underline"
                  : "block px-3 py-2 text-[var(--text-main)] hover:bg-[var(--sidebar-hover-bg)] rounded-lg transition-colors font-sans text-sm no-underline"
              }
            >
              {genre.name}
              {counts && (
                <span className="ml-2 text-xs text-[var(--text-secondary)] opacity-70">
                  ({genre.count})
                </span>
              )}
            </a>
          ))}
        </div>
      </nav>

      <div className="mt-auto pt-6 px-6 border-t border-[var(--sidebar-border)] absolute bottom-6 w-full">
        <div className="text-xs text-[var(--text-secondary)]">
          Powered by <br />
          <a
            href="https://cloudflare.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary-color)] hover:underline"
          >
            Cloudflare
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
