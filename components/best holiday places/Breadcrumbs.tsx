"use client";

import React from "react";
import Link from "next/link";

// BreadcrumbSeparator component
const BreadcrumbSeparator: React.FC = () => (
  <span className="mx-2 text-black-400 flex items-center" aria-hidden="true">
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

// BreadcrumbItem component
interface BreadcrumbItemProps {
  children: React.ReactNode;
  href?: string;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ children, href }) =>
  href ? (
    <Link
      href={href}
      className="text-neutral-900 hover:text-yellow-500 transition-colors"
    >
      {children}
    </Link>
  ) : (
    <span className="text-neutral-900">{children}</span>
  );

// Breadcrumbs component
const Breadcrumbs: React.FC = () => (
  <div className="text-sm leading-loose text-neutral-900 h-[62px]">
    <nav
      className="flex flex-col justify-center items-center px-0 py-0 w-full bg-[#fffae6] w-full max-w-[1550px] mx-auto overflow-x-hidden" // Changed items-start to items-center
      aria-label="Breadcrumb"
    >
      <div className="flex items-center my-[20px] bg-[#fff5cf] lg:mr-254 lg:ml-0">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem href="/best-holiday-places">
          Best Holiday Places
        </BreadcrumbItem>
      </div>
    </nav>
  </div>
);

export default Breadcrumbs;
