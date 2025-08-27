import React from 'react';

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12.313 2.547c.974 0 1.902.388 2.587 1.073l7 7a3.666 3.666 0 010 5.174l-7 7a3.666 3.666 0 01-5.174 0l-7-7a3.666 3.666 0 010-5.174l7-7A3.666 3.666 0 0112.313 2.547zm-5.174 8.073a1.5 1.5 0 012.122 0L12 13.333l2.739-2.713a1.5 1.5 0 112.122 2.121L14.12 15.455l2.74 2.713a1.5 1.5 0 11-2.122 2.121L12 17.576l-2.74 2.713a1.5 1.5 0 11-2.12-2.122l2.738-2.713-2.739-2.713a1.5 1.5 0 010-2.12z"
      clipRule="evenodd"
    />
  </svg>
);
