"use client";

import React, { useState } from "react";
import Image from "next/image";

// Divider component (no changes needed)
const Divider: React.FC = () => (
  <hr className="mt-5 w-full bg-zinc-200 border-0 h-px  lg:-ml-0 lg:mr-0" />
);

// RatingItem component (updated)
interface RatingItemProps {
  stars: number;
  count: string;
}

const RatingItem: React.FC<RatingItemProps> = ({ stars, count }) => {
  const [checked, setChecked] = useState(false);

  const getStarImage = (numStars: number): string => {
    return `/icons/stars/${numStars}-star.png`;
  };

  const starImageSource = getStarImage(stars);

  return (
    <label className="flex items-center gap-2.5 mt-4 first:mt-0 cursor-pointer select-none lg:-ml-0 lg:mr-0">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((v) => !v)}
        className="sr-only"
      />
      <span
        className={`inline-flex items-center justify-center w-5 h-5 rounded border-2 border-gray-300 transition-colors ${
          checked ? "bg-green-900 border-green-900" : "bg-white"
        }`}
        aria-hidden="true"
      >
        {checked && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path
              d="M5 13l4 4L19 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {/* Stars and count aligned */}
      <span className="flex items-center min-w-[120px]">
        <span className="flex gap-0.5 min-w-[180px]">
          <div style={{ position: "relative", width: 100, height: 25 }}>
            <Image
              src={starImageSource}
              alt={`${stars} Stars`}
              layout="fill"
              objectFit="contain" // Or 'cover', 'scale-down', etc.
              onError={(e) => {
                console.error(`Error loading image for ${stars} stars:`, e);
              }}
            />
          </div>
        </span>
        <span className="text-base leading-loose text-neutral-900 ml-2">
          {count}
        </span>
      </span>
    </label>
  );
};

// CategoryItem component (no changes needed)
interface CategoryItemProps {
  label: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center gap-2.5 mt-4 first:mt-0 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((v) => !v)}
        className="sr-only"
      />
      <span
        className={`inline-flex items-center justify-center w-5 h-5 rounded border-2 border-gray-300 transition-colors  ${
          checked ? "bg-green-900 border-green-900" : "bg-white"
        }`}
        aria-hidden="true"
      >
        {checked && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path
              d="M5 13l4 4L19 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="text-neutral-900">{label}</span>
    </label>
  );
};

// FilterSection component (no changes needed)
interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section className="mt-5 w-full text-neutral-900 hidden md:block lg:block ">
      <header className="w-full text-lg font-bold leading-none -ml-0 lg:-ml-0 ">
        <button
          className="flex items-center w-full justify-between"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          type="button"
        >
          <h2 className="text-neutral-900">{title}</h2>
          <span
            className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
          >
            {/* Chevron Down SVG */}
            <svg
              className="w-6 h-6 text-neutral-500 cursor-pointer"
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
        </button>
      </header>
      {isExpanded && <div className="mt-5">{children}</div>}
      <Divider />
    </section>
  );
};

// SearchInput component (updated to include input field)
interface SearchInputProps {
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search location",
}) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex flex-col justify-center px-5 py-3 w-95 -mt-8 lg:-mt-0 md:-mt-6 ml-3.5 md:w-full lg:w-full text-base leading-loose rounded-xl border border-solid border-gray-200 min-h-14 text-zinc-400 lg:ml-0 ">
      <div className="flex gap-2.5 items-center w-full ">
        {/* Search SVG */}
        <svg
          className="object-contain shrink-0 w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 w-250 md:w-50 lg:w-50 text-lg outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </div>
  );
};

// PriceSlider component (no changes needed)
const PriceSlider: React.FC = () => {
  const [price, setPrice] = useState(2000);
  const min = 0;
  const max = 2000;
  const percent = ((price - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-4 hidden md:block lg:block lg:-ml-0 lg:mr-0">
      <div className="flex justify-between text-base text-neutral-900">
        <span>Price: ${min}</span>
        <span>${price}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full h-2 rounded-lg appearance-none bg-gray-200 focus:outline-none
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-[#FFCA01]
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-white
            [&::-webkit-slider-thumb]:shadow
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-moz-range-thumb]:bg-[#FFCA01]
            [&::-ms-thumb]:bg-[#FFCA01]
            accent-[#FFCA01]
          "
        style={{
          background: `linear-gradient(to right, #FFCA01 0%, #FFCA01 ${percent}%, #e5e7eb ${percent}%, #e5e7eb 100%)`,
          accentColor: "#FFCA01",
        }}
      />
    </div>
  );
};

// SideFilter component (no changes needed)
const SideFilter: React.FC = () => (
  <aside className="max-w-[244px] w-full md:w-[244px] lg:w-[244px]">
    {/* Make width responsive */}
    <SearchInput />
    <FilterSection title="Experiences">
      <nav className="text-base leading-loose">
        {/* Remove hiding classes */}
        <CategoryItem label="Cultural and Historical" />
        <CategoryItem label="Distillery" />
        <CategoryItem label="Outdoor" />
        <CategoryItem label="Watersports" />
        <CategoryItem label="Family" />
        <CategoryItem label="Golfing" />
      </nav>
    </FilterSection>
    <FilterSection title="Price">
      <PriceSlider />
    </FilterSection>
    <FilterSection title="Ratings">
      <div>
        <RatingItem stars={5} count="(40)" />
        <RatingItem stars={4} count="(24)" />
        <RatingItem stars={3} count="(35)" />
        <RatingItem stars={2} count="(20)" />
        <RatingItem stars={1} count="(12)" />
      </div>
    </FilterSection>
  </aside>
);

export default SideFilter;
