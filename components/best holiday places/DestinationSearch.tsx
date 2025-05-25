"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// DestinationCard component (using HolidayCard from BestPlaceForHoliday)
interface DestinationCardProps {
  imageUrl: string;
  reviews: string;
  title: string;
  price: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  imageUrl,
  reviews,
  title,
  price,
}) => (
  <article className="flex flex-col p-5 -mt-10 md:-mt-0 md:-mt-0 mb-8 md:mb-0 lg:mb-0 rounded-2xl w-[380px] lg:w-[413px] md:w-[423px] border border-gray-200 bg-white max-md:flex-row max-md:items-center max-md:p-2 md:-ml-0 md:mr-6 lg:-ml-0 lg:mr-0 mr-9 -ml-61">
    {/* Mobile horizontal layout */}
    <div className="hidden max-md:flex w-[90px] h-[80px] rounded-lg overflow-hidden flex-shrink-0">
      <Image
        src={imageUrl}
        alt={title}
        width={90}
        height={80}
        className="object-cover w-full h-full"
      />
    </div>

    <div className="hidden max-md:flex flex-col justify-between flex-1 h-full pl-3">
      <h2 className="text-base font-bold text-neutral-900 truncate">{title}</h2>
      <div className="flex items-center gap-1">
        <Image src="/icons/stars.webp" alt="Star" width={100} height={20} />
        <p className="text-xs text-black-500">{reviews}</p>
      </div>
      <div className="flex items-center justify-between mt-1 w-full">
        <div className="flex items-baseline gap-1">
          <span className="text-base font-bold text-neutral-900">${price}</span>
          <span className="font-normal text-xs leading-[26px] text-black-600">
            /per person
          </span>
        </div>
      </div>
    </div>

    {/* Desktop/Tablet vertical layout */}
    <React.Fragment>
      <div className="flex relative flex-col items-start px-2.5 pt-40 pb-2.5 w-full text-xs font-bold leading-7 text-black rounded-2xl aspect-[1.63] max-md:hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover absolute inset-0 size-full rounded-2xl"
          style={{ zIndex: 0 }}
        />
      </div>

      <div className="flex gap-2.5 items-center self-start mt-4 text-base leading-loose text-neutral-900 max-md:hidden">
        <Image src="/icons/stars.webp" alt="Star" width={100} height={20} />
        <p className="self-stretch my-auto text-neutral-900">{reviews}</p>
      </div>

      <h2 className="self-start mt-4 text-2xl  font-bold text-neutral-900 max-md:hidden">
        {title}
      </h2>

      <hr className="border-t border-gray-200 my-5 max-md:hidden" />

      <div className="flex gap-5 justify-between w-full max-md:hidden ">
        <div className="my-auto text-3xl font-bold leading-7 text-neutral-900">
          ${price}
          <span className="font-normal text-base leading-[26px]">
            /per person
          </span>
        </div>

        <button className="gap-2.5 px-5 py-3 text-base leading-loose text-white rounded-xl bg-[#2F4832] min-h-[50px] cursor-pointer hover:bg-[#244026]">
          View More
        </button>
      </div>
    </React.Fragment>
  </article>
);

// SearchHeader component (remains the same)
interface SearchHeaderProps {
  destinationsCount: number;
  onSort: (sortBy: string) => void; // Function to handle sorting
}

const SearchHeader: React.FC<SearchHeaderProps> = ({
  destinationsCount,
  onSort,
}) => {
  const [isSortExpanded, setIsSortExpanded] = useState(false);
  const [selectedSort, setSelectedSort] = useState("default"); // Default sorting option
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sortOptions = [
    { value: "default", label: isMobile ? "default" : "Short by Default" },
    { value: "price-low-to-high", label: "Price: Low to High" },
    { value: "price-high-to-low", label: "Price: High to Low" },
    { value: "rating", label: "Rating" },
    { value: "title-asc", label: "Title: A to Z" },
  ];

  const handleSortChange = (sortByValue: string) => {
    setSelectedSort(sortByValue);
    onSort(sortByValue);
    setIsSortExpanded(false); // Close the dropdown after selecting
  };

  return (
    <header className="flex flex-wrap gap-8 items-center w-full max-md:max-w-full md:-mt-6 lg:-mt-0 mt-12 -ml-57 md:-ml-6 md:-ml-0 lg:-ml-0 ">
      <div
        className={
          isMobile
            ? "flex flex-wrap gap-2 items-center self-stretch my-auto min-w-[340px] max-md:max-w-full"
            : "flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-5 min-w-[340px] max-md:max-w-full"
        }
      >
        <div className="flex gap-5 items-center self-stretch my-auto ">
          <button className="flex gap-2.5 justify-center items-center self-stretch px-3.5 my-auto bg-yellow-400 rounded-xl h-12 min-h-12 w-12 ">
            <Image
              src="/icons/Button.webp"
              alt="Filter"
              className="object-contain self-stretch my-auto w-6 h-6"
              width={24}
              height={24}
            />
          </button>

          <Image
            src="/icons/Vector.svg"
            alt="Search"
            className="object-contain  self-stretch my-auto w-6 h-6"
            width={24}
            height={24}
          />
        </div>

        <p className="self-stretch my-auto text-sm md:text-base lg:text-base leading-loose text-neutral-900">
          {destinationsCount} Destinations Found
        </p>
      </div>

      {/* Sort dropdown */}
      <div className="relative">
        <button
          className="flex flex-col justify-center self-stretch ml-70 -mt-20 md:-mt-20 md:-mr-10 lg:-mr-0 lg:-mt-0 lg:mr-2 px-3 py-3 md:px-2.5 lg:px-2.5 my-auto text-base md:text-base lg:text-base leading-loose rounded-xl border border-solid border-gray-200 min-h-[48px] text-neutral-900"
          onClick={() => setIsSortExpanded(!isSortExpanded)}
        >
          <div className="flex lg:gap-1.5 md:gap-1 gap-1 items-center">
            <span className="text-neutral-900 text-base cursor-pointer">
              {sortOptions.find((opt) => opt.value === selectedSort)?.label}
            </span>
            <span
              className={`transition-transform cursor-pointer ${
                isSortExpanded ? "rotate-180" : ""
              }`}
            >
              <svg
                className="w-4 h-4 text-neutral-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </button>

        {isSortExpanded && (
          <div className="absolute top-full left-42 md:left-63 lg:left-64 -mt-7 md:-mt-7 lg:-mt-0 w-48 rounded-md shadow-md bg-white z-10 border border-gray-200">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSortChange(option.value)}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                  selectedSort === option.value
                    ? "bg-gray-100 font-semibold"
                    : ""
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

// DestinationSearch component (updated to use the new DestinationCard and handle sorting)
const DestinationSearch: React.FC = () => {
  const initialSearchResults = [
    {
      imageUrl: "/images/distillery.webp",
      reviews: "4.8 (8.0K Reviews)",
      title: "Distillery",
      price: 50,
      rating: 4.8,
    },
    {
      imageUrl: "/images/cultural.webp",
      reviews: "4.8 (12.0K Reviews)",
      title: "Cultural and Historical",
      price: 20,
      rating: 4.5,
    },
    {
      imageUrl: "/images/Watersports.webp",
      reviews: "4.8 (7.5K Reviews)",
      title: "Watersports",
      price: 35,
      rating: 4.9,
    },
    {
      imageUrl: "/images/Family.webp",
      reviews: "4.8 (5.0K Reviews)",
      title: "Family Fun",
      price: 100,
      rating: 4.2,
    },
    {
      imageUrl: "/images/outdoor.webp",
      reviews: "4.8 (3.0K Reviews)",
      title: "Outdoor Adventure",
      price: 70,
      rating: 4.7,
    },
    {
      imageUrl: "/images/Golfing.webp",
      reviews: "4.8 (2.5K Reviews)",
      title: "Golfing Experience",
      price: 60,
      rating: 4.6,
    },
    {
      imageUrl: "/images/distillery.webp",
      reviews: "4.8 (8.0K Reviews)",
      title: "Another Distillery",
      price: 55,
      rating: 4.3,
    },
    {
      imageUrl: "/images/cultural.webp",
      reviews: "4.8 (12.0K Reviews)",
      title: "More Culture",
      price: 25,
      rating: 4.8,
    },
    {
      imageUrl: "/images/Watersports.webp",
      reviews: "4.8 (7.5K Reviews)",
      title: "Extreme Watersports",
      price: 40,
      rating: 4.1,
    },
    {
      imageUrl: "/images/Family.webp",
      reviews: "4.8 (5.0K Reviews)",
      title: "Family Time",
      price: 90,
      rating: 4.4,
    },
  ];

  const [searchResults, setSearchResults] = useState(initialSearchResults);

  const handleSort = (sortBy: string) => {
    let sortedResults = [...searchResults];

    switch (sortBy) {
      case "price-low-to-high":
        sortedResults.sort((a, b) => a.price - b.price);
        break;
      case "price-high-to-low":
        sortedResults.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sortedResults.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "title-asc":
        sortedResults.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        sortedResults = initialSearchResults; // Reset to default order
        break;
    }
    setSearchResults(sortedResults);
  };

  return (
    <section className="max-w-[846px] lg:ml-8 lg:mr-0">
      <SearchHeader
        destinationsCount={searchResults.length}
        onSort={handleSort}
      />
      <div className="flex max-w-[1200px] flex-wrap gap-5 items-start mt-8 md:mt-0 lg:mt-10 ml-3.5 md:ml-0 lg:ml-0">
        {searchResults.map((card, index) => (
          <DestinationCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default DestinationSearch;
