import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
         <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E1F2B]">
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Shopping Cart Outline */}
              <path
                d="M2 3h3.2l2.4 10.5a1.5 1.5 0 0 0 1.5 1.2h8.8a1.5 1.5 0 0 0 1.5-1.2L21 6H7"
                stroke="white"
                strokeWidth="2"
              />
              <circle cx="10" cy="19" r="1.5" fill="white" />
              <circle cx="17" cy="19" r="1.5" fill="white" />
              {/* Lightning Bolt */}
              <path
                d="M13 2.5L9 7.5h3.5L11 12.5l5-5h-3.5z"
                fill="#14B8A6"
                stroke="#14B8A6"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <span className="text-xl font-bold tracking-tight text-[#0E1F2B]">
            Swift<span className="text-[#14B8A6]">Mart</span>
          </span>
        </Link>
    );
};

export default Logo;