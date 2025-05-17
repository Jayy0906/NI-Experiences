"use client";

import React, { useState, useEffect } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

library.add(fas, far);

const StarRating = () => {
  const [starSize, setStarSize] = useState({ height: "20px", width: "10px" });

  useEffect(() => {
    const updateStarSize = () => {
      if (typeof window === "undefined") return; // Important for SSR safety

      const width = window.innerWidth;
      if (width >= 1024) {
        setStarSize({ height: "28px", width: "28px" });
      } else if (width >= 768) {
        setStarSize({ height: "28px", width: "20px" });
      } else if (width >= 640) {
        setStarSize({ height: "28px", width: "20px" });
      } else {
        setStarSize({ height: "20px", width: "10px" });
      }
    };

    if (typeof window !== "undefined") {
      updateStarSize(); // Set initial size, but only on client
      window.addEventListener("resize", updateStarSize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateStarSize);
      }
    };
  }, []);

  return (
    <div className="flex items-center gap-1 text-yellow-400 text-base">
      <FaIcon icon={faStar} style={starSize} />
      <FaIcon icon={faStar} style={starSize} />
      <FaIcon icon={faStar} style={starSize} />
      <FaIcon icon={faStar} style={starSize} />
      <FaIcon icon={faStar} style={starSize} />
    </div>
  );
};

const TripInfo = ({
  days,
  location,
  isMobile,
}: {
  days: string;
  location: string;
  isMobile: boolean;
}) => (
  <div
    className={`flex items-center gap-3 text-black-700 text-sm ${
      isMobile ? "flex-nowrap" : "flex-wrap"
    }`}
  >
    <div
      className={`flex items-center gap-2 lg:gap-6 md:gap-6 mr-6 mb-2 ${
        isMobile ? "whitespace-nowrap" : ""
      }`}
    >
      {/* Added whitespace-nowrap */}
      <div>
        <div className="mb-1 text-gray-400 text-[14px]">Review</div>
        <StarRating />
      </div>
      <div className="border-l border-gray-300 pl-6">
        <div className="mb-1 text-gray-400 text-[14px]">Days</div>
        <div className="text-[16px] text-black-400">{days}</div>
      </div>
      <div className="border-l border-gray-300 pl-6">
        <div className="mb-1 text-gray-400 text-[14px]">Location</div>
        <div className="text-[16px] text-black-400">{location}</div>
      </div>
    </div>
  </div>
);

const ActionButtons = () => {
  return (
    <div className="flex items-center gap-3 lg:-mt-14 lg:-mr-35 md:-mt-14 md:ml-100 -mt-39 ml-10">
      <button
        aria-label="Favorite"
        className="bg-yellow-400 p-3 rounded-md text-white hover:bg-yellow-500 transition cursor-pointer"
      >
        <Image src="/icons/heart.png" alt="Favorite" width={24} height={24} />
      </button>

      <button
        aria-label="Share"
        className="flex items-center gap-2 border border-yellow-400 rounded-md px-4 py-2 text-yellow-400 hover:bg-yellow-200 hover:text-white transition text-sm font-semibold cursor-pointer"
      >
        <Image src="/icons/Vector.png" alt="Favorite" width={24} height={24} />
        Share
      </button>
    </div>
  );
};

const OverviewNavigation = () => (
  <div className="flex gap-6 border-b border-gray-300 mb-6 text-[20px] font-semibold md:mt-10 lg:mt-10 mt-10">
    <button className="text-yellow-400 border-b-2 border-yellow-400 pb-1 cursor-pointer">
      Overview
    </button>
    <button className="text-black-600 pb-1 cursor-pointer hover:text-yellow-400 font-normal">
      Reviews
    </button>
  </div>
);

const TripOverview = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <section className="mb-10">
    <h3 className="font-bold text-[20px] mb-3">{title}</h3>
    <p className="text-[16px] text-black-600 leading-relaxed">{description}</p>
  </section>
);

const IncludedExcluded = () => {
  const items = [
    { included: true, text: "Flight Ticket & Cab Transportation" },
    { included: false, text: "Sight-seen" },
    { included: true, text: "Breakfast, Lunch & Dinner" },
    { included: false, text: "City Tour" },
    { included: true, text: "Hotel Accommodation" },
    { included: false, text: "Custom Duty" },
    { included: true, text: "Professional Tour Guide" },
    { included: null, text: "" }, // For the empty grid cells
    { included: true, text: "Transfer Between Destinations" },
    { included: null, text: "" },
    { included: true, text: "How to use premade UI kits" },
    { included: null, text: "" },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Define mobile as smaller than tablet breakpoint
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const includedItems = items.filter((item) => item.included === true);
  const excludedItems = items.filter((item) => item.included === false);
  const emptyItemsCount = items.filter((item) => item.included === null).length;
  const emptyItemsArray = Array(emptyItemsCount).fill(null);

  return (
    <section className="mb-10 mt-15 md:mt-20 lg:mt-0">
      <h3 className="font-bold text-[20px] mb-6">Included/Excluded</h3>
      <div
        className={`grid gap-y-3 text-[16px] text-black-600 ${
          isMobile ? "grid-cols-1" : "md:grid-cols-2"
        }`}
      >
        {isMobile
          ? [
              ...includedItems.map((item, index) => (
                <div
                  key={`included-${index}`}
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/icons/right.png"
                    alt="Included"
                    width={20}
                    height={20}
                  />
                  <span>{item.text}</span>
                </div>
              )),
              ...excludedItems.map((item, index) => (
                <div
                  key={`excluded-${index}`}
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/icons/Wrong.png"
                    alt="Excluded"
                    width={20}
                    height={20}
                  />
                  <span>{item.text}</span>
                </div>
              )),
              ...emptyItemsArray.map((_, index) => (
                <div key={`empty-${index}`}></div>
              )), // Maintain grid structure
            ]
          : items.map((item, index) => (
              <div key={`item-${index}`} className="flex items-center gap-2">
                {item.included === true && (
                  <Image
                    src="/icons/right.png"
                    alt="Included"
                    width={20}
                    height={20}
                  />
                )}
                {item.included === false && (
                  <Image
                    src="/icons/Wrong.png"
                    alt="Excluded"
                    width={20}
                    height={20}
                  />
                )}
                <span>{item.text}</span>
              </div>
            ))}
      </div>
      <hr className="border-t border-gray-200 -my-5 md:my-5 " />
    </section>
  );
};

const CalendarComponent = () => {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const dates = [
    "",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    "",
    "",
    "",
  ];

  return (
    <div className="bg-white rounded-xl p-6 flex flex-col gap-6">
      <div className="flex items-baseline gap-1">
        <span className="font-extrabold text-[40px]">$100</span>
        <span className="text-xs font-normal">/per person</span>
      </div>
      <hr className="border-t border-gray-200 -my-5 md:my-2 mb-1 " />
      <div className="text-xs font-semibold text-gray-900 flex items-center justify-center gap-1">
        <span>Select Date</span>
        <span className="cursor-pointer select-none">&lt;</span>
        <span className="text-[#2F4832] text-sm cursor-pointer select-none">
          December 2024
        </span>
        <span className="cursor-pointer select-none">&gt;</span>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-gray-600 select-none">
        {days.map((day, index) => (
          <div key={`day-${index}`} className="text-gray-400 text-[16px]">
            {day}
          </div>
        ))}
        {dates.map((date, index) => (
          <div
            key={`date-${index}`}
            className={`flex items-center justify-center  ${
              date === 16 ? "bg-yellow-400 text-white rounded-full w-8 h-8" : ""
            }`}
          >
            {date}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-9 mt-4 text-sm">
        <span className="font-semibold text-[16px] text-gray-700">Adult</span>
        <div className="flex items-center gap-2">
          <div className="border border-gray-200 rounded-md w-[84px] h-[50px] flex items-center justify-center text-base">
            2
          </div>
          <span className="text-base">x $2350</span>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <span className="font-semibold text-[16px] text-gray-700">
          Children
        </span>
        <div className="flex items-center gap-2">
          <div className="border border-gray-200 rounded-md w-[84px] h-[50px] flex items-center justify-center text-base">
            0
          </div>
          <span className="text-base">x $2000</span>
        </div>
      </div>
      <div className="flex items-center gap-9 text-sm">
        <span className="font-semibold text-[16px] text-gray-700">Infant</span>
        <div className="flex items-center gap-2">
          <div className="border border-gray-200 rounded-md w-[84px] h-[50px] flex items-center justify-center text-base">
            0
          </div>
          <span className="text-base">x $2350</span>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="font-semibold text-[20px] text-gray-700 mb-4">
          Extra Service
        </h4>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-5 h-5 rounded border-black-700 focus:ring-yellow-400 cursor-pointer"
          />
          <span className="text-base">Medical Insurance</span>
        </div>
      </div>
      <button className="bg-[#2F4832] mx-auto text-white font-semibold rounded-xl w-[300px] h-[56px] mt-6 hover:bg-[#244026] cursor-pointer transition-colors block">
        Book Now
      </button>
    </div>
  );
};

const TripDetailsPage = () => {
  const overviewText = `It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy.`;

  const planText = `Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy.`;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjusted breakpoint here as well
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 flex flex-col lg:flex-row gap-10">
        {/* Left content */}
        <div className="flex-1 max-w-full lg:max-w-3xl">
          <h1 className="text-4xl max-w-[200px] md:max-w-[400px] font-extrabold mb-6">
            Glens of Antrim
          </h1>
          <div className="flex items-center justify-between flex-wrap">
            <TripInfo
              days="5 Days/4 Night"
              location="Northern Ireland"
              isMobile={isMobile}
            />{" "}
            {/* Pass isMobile prop */}
            <div className="ml-40">
              <ActionButtons />
            </div>
            
          </div>

          <OverviewNavigation />

          <TripOverview title="Trip Overview" description={overviewText} />
          <hr className="border-t border-gray-200 my-8" /> {/* Added hr line here */}
          {isMobile && (
            <div
              className="rounded-xl shadow-[0_0_40px_10px_rgba(0,0,0,0.3)] border border-gray-200 mb-8
              md:max-w-[450px]
              md:mx-auto
              md:mt-8
            "
              style={{
                boxShadow:
                  "0 0 40px 10px rgba(0,0,0,0.3), 0 0 80px 20px rgba(0,0,0,0.15), 0 0 120px 30px rgba(0,0,0,0.1)",
              }}
            >
              <CalendarComponent />
            </div>
          )}
          <IncludedExcluded />
          <TripOverview title="Trip Plan" description={planText} />

          <img
            alt="Glens of Antrim landscape with a tall stone cross in the foreground, green hills and trees under a partly cloudy sky"
            className="mt-8 rounded-lg w-full max-w-[750px] max-h-[306px] object-cover mx-auto"
            height={306}
            src={"/images/Trip Plan.webp"}
            width={750}
          />
        </div>

        {/* Right content (only for larger screens) */}
        {!isMobile && (
          <div
            className="relative max-w-[360px] w-full max-h-[879px] lg:ml-[150px] lg:-mt-40 rounded-xl shadow-[0_0_40px_10px_rgba(0,0,0,0.3)] border border-gray-200"
            style={{
              boxShadow:
                "0 0 40px 10px rgba(0,0,0,0.3), 0 0 80px 20px rgba(0,0,0,0.15), 0 0 120px 30px rgba(0,0,0,0.1)",
            }}
          >
            <CalendarComponent />
          </div>
        )}
      </div>
    </div>
  );
};

export default TripDetailsPage;
