"use client";
import * as React from "react";

interface PaginationNavButtonProps {
  direction: "previous" | "next";
  onClick?: () => void;
  imageSrc: string;
}

export const PaginationNavButton: React.FC<PaginationNavButtonProps> = ({
  direction,
  onClick,
  imageSrc,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center cursor-pointer"
      aria-label={direction === "previous" ? "Previous page" : "Next page"}
    >
      <img
        src={imageSrc}
        alt={direction === "previous" ? "Previous" : "Next"}
        className="object-contain shrink-0 my-auto w-6 aspect-square"
      />
    </button>
  );
};

interface PaginationButtonProps {
  number: number;
  isActive?: boolean;
  onClick?: () => void;
}

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  number,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 w-10 h-10 rounded-md cursor-pointer ${
        isActive
          ? "text-white bg-yellow-400"
          : "bg-zinc-100 bg-opacity-10 hover:bg-yellow-400 text-neutral-900"
      }`}
      aria-label={`Page ${number}`}
      aria-current={isActive ? "page" : undefined}
    >
      {number}
    </button>
  );
};

interface PaginationProps {}

const Pagination: React.FC<PaginationProps> = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <nav
      className="flex gap-2.5 text-base leading-loose whitespace-nowrap rounded-none text-neutral-900 mt-12 lg:mr-8 mb-15 mx-auto w-fit" // Removed ml-* and added mx-auto w-fit
      aria-label="Pagination"
    >
      <PaginationNavButton
        direction="previous"
        onClick={handlePrevious}
        imageSrc="/icons/back.svg"
      />
      {[1, 2, 3, 4, 5].map((number) => (
        <PaginationButton
          key={number}
          number={number}
          isActive={currentPage === number}
          onClick={() => handlePageChange(number)}
        />
      ))}
      <PaginationNavButton
        direction="next"
        onClick={handleNext}
        imageSrc="/icons/next.svg"
      />
    </nav>
  );
};

export default Pagination;
