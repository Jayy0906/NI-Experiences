"use client";
import React from "react";
import Image from "next/image";

interface PriceDisplayProps {
  amount: number;
}

const PriceDisplay = ({ amount }: PriceDisplayProps) => (
  <div className="my-auto text-3xl font-bold leading-7 text-neutral-900">
    ${amount}
    <span className="font-normal text-base leading-[26px] text-black-600">
      /per person
    </span>
  </div>
);

interface HolidayCardProps {
  imageUrl: string;
  reviews: string;
  title: string;
  price: number;
}

const HolidayCard = ({ imageUrl, reviews, title, price }: HolidayCardProps) => (
  <article className="flex flex-col p-5 rounded-2xl min-w-[280px] w-[366px] border border-gray-200 bg-white max-md:flex-row max-md:items-center max-md:w-[360px] max-md:h-[100px] max-md:min-w-[360px] max-md:p-2">
    {/* Mobile layout */}
    <div className="max-md:flex w-[90px] h-[80px] rounded-lg overflow-hidden flex-shrink-0 hidden">
      <Image
        src={imageUrl}
        alt={title}
        width={90}
        height={80}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="max-md:flex flex-col justify-between flex-1 h-full pl-3 hidden">
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
    {/* Desktop/Tablet layout */}
    <div className="relative flex-col items-start px-2.5 pt-40 pb-2.5 w-full text-xs font-bold leading-7 text-black rounded-2xl aspect-[1.63] max-md:hidden">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover absolute inset-0 size-full rounded-2xl"
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
      <button className="gap-2.5 px-5 py-3 text-base leading-loose text-white rounded-xl bg-[#2F4832] min-h-[50px] cursor-pointer hover:bg-[#244026] transition-colors">
        View More
      </button>
    </div>
  </article>
);

const HolidayHeader = () => (
  <header className="w-full text-center mt-40 md:mt-30 lg:mt-30">
    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">
      Best value deals
    </h1>
  </header>
);

const BestValueDeals = () => {
  const deals = [
    {
      imageUrl: "/images/distillery.webp",
      reviews: "4.8 (8.0K Reviews)",
      title: "Distillery",
      price: 50,
    },
    {
      imageUrl: "/images/cultural.webp",
      reviews: "4.8 (12.0K Reviews)",
      title: "Cultural and Historical",
      price: 20,
    },
    {
      imageUrl: "/images/outdoor.webp",
      reviews: "4.8 (3.0K Reviews)",
      title: "Outdoor",
      price: 70,
    },
  ];

  return (
    <section className="flex flex-col items-center mt-24 md:mt-36 lg:mt-40 w-full max-w-[1440px] mx-auto overflow-x-hidden">
      <HolidayHeader />
      <div className="mt-12 w-full md:px-8 lg:px-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {deals.map((deal) => (
            <HolidayCard key={deal.title} {...deal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestValueDeals;
