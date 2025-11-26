import React from 'react';

function Breadcrumbs({ items }) {
  return (
    <nav className="flex items-center space-x-2 mb-4 text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center">
            {isLast ? (
              <span className="text-[var(--primary-color)] font-medium">{item.label}</span>
            ) : (
              <>
                <a href={item.href} className="text-[var(--text-main)] hover:text-[var(--primary-color)] cursor-pointer hover:underline transition-colors">
                  {item.label}
                </a>
                <span className="text-[var(--text-secondary)] mx-2 opacity-50">&gt;</span>
              </>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
