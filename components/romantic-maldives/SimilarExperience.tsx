"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

const HOLIDAY_CARDS = [
  {
    imageUrl: "/images/distillery.webp",
    reviews: "4.8 (8.0K Reviews)",
    title: "Distillery",
    price: 1500,
  },
  {
    imageUrl: "/images/cultural.webp",
    reviews: "4.8 (12.0K Reviews)",
    title: "Cultural and Historical",
    price: 2000,
  },
  {
    imageUrl: "/images/outdoor.webp",
    reviews: "4.8 (3.0K Reviews)",
    title: "Outdoor",
    price: 1670,
  },
];

const PriceDisplay = ({ amount }: { amount: number }) => (
  <div className="my-auto text-3xl font-bold leading-7 text-neutral-900">
    ${amount}
    <span className="font-normal text-base leading-[26px]">/per person</span>
  </div>
);

const HolidayCard = ({
  imageUrl,
  reviews,
  title,
  price,
}: {
  imageUrl: string;
  reviews: string;
  title: string;
  price: number;
}) => (
  <article className="flex flex-col p-5 rounded-2xl min-w-[280px] w-[366px] border border-gray-200 bg-white max-md:flex-row max-md:items-center max-md:w-full max-md:min-w-0 max-md:p-2 justify-self-center">
    {/* Added justify-self-center if needed */}
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
    <div className="hidden max-md:flex flex-col justify-between flex-1 h-full pl-3 ">
      <h2 className="text-base font-bold text-neutral-900 truncate">{title}</h2>
      <div className="flex items-center gap-1">
        <Image src="/icons/stars.png" alt="Star" width={100} height={20} />
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
      <div className="flex relative flex-col items-start px-2.5 pt-40 pb-2.5 w-full text-xs font-bold leading-7 text-black rounded-2xl aspect-[1.63] max-md:hidden ">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover absolute inset-0 size-full rounded-2xl"
          style={{ zIndex: 0 }}
        />
      </div>
      <div className="flex gap-2.5 items-center self-start mt-4 text-base leading-loose text-neutral-900 max-md:hidden">
        <Image src="/icons/stars.png" alt="Star" width={100} height={20} />
        <p className="self-stretch my-auto text-neutral-900">{reviews}</p>
      </div>
      <h2 className="self-start mt-4 text-2xl font-bold text-neutral-900 max-md:hidden">
        {title}
      </h2>
      <hr className="border-t border-gray-200 my-5 max-md:hidden" />
      <div className="flex gap-5 justify-between w-full max-md:hidden">
        <PriceDisplay amount={price} />
        <button className="gap-2.5 px-5 py-3 text-base leading-loose text-white rounded-xl bg-[#2F4832] min-h-[50px] cursor-pointer hover:bg-[#244026]">
          View More
        </button>
      </div>
    </React.Fragment>
  </article>
);

const HolidayHeader = () => (
  <header className="w-full lg:text-start lg:ml-32 md:ml-10 ml-4">
    <h1 className="text-4xl font-bold text-neutral-900">Similar Experience</h1>
  </header>
);

const SimilarExperience: React.FC = () => {
  const tabsRef = useRef<HTMLDivElement>(null); // Drag-to-scroll for tabs (remains the same)
  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      el.classList.add("cursor-grabbing");
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onMouseLeave = () => {
      isDragging = false;
      el.classList.remove("cursor-grabbing");
    };
    const onMouseUp = () => {
      isDragging = false;
      el.classList.remove("cursor-grabbing");
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX);
    };
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);
    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const cardsRef = useRef<HTMLDivElement>(null);  // Drag-to-scroll for cards (remains the same)
  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      el.classList.add("cursor-grabbing");
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onMouseLeave = () => {
      isDragging = false;
      el.classList.remove("cursor-grabbing");
    };
    const onMouseUp = () => {
      isDragging = false;
      el.classList.remove("cursor-grabbing");
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX);
    };
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);
    // Prevent image dragging
    const imgs = el.querySelectorAll("img");
    imgs.forEach((img) => img.setAttribute("draggable", "false"));
    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section className="flex flex-col items-center mt-[50px] w-full max-w-[1440px] mx-auto overflow-x-hidden lg:mb-[100px] mb-[80px]">
      <div className="w-full flex justify-center">
        {/* Center the header */}
        <HolidayHeader />
      </div>
      {/* Cards */}
      <div className="mt-8 w-full px-4 lg:px-26 md:px-6">
        {/* Adjusted padding */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-0 justify-items-center overflow-x-auto select-none"
          style={{
            overflowX: "auto",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {HOLIDAY_CARDS.map((card, idx) => (
            <HolidayCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarExperience;
