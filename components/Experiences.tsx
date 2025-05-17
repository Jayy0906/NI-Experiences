"use client";
import React from "react";
import Image from "next/image";

// Card data
const locations = [
  {
    image: "/images/Carrickfergus Castle.webp",
    title: "Cultural and Historical",
  },
  {
    image: "/images/Ards Peninsula.webp",
    title: "Distillery",
  },
  {
    image: "/images/Ulster Folk Museum.webp",
    title: " Outdoor",
  },
  {
    image: "/images/Carrickfergus Castle.webp",
    title: "Watersports",
  },
  {
    image: "/images/Ards Peninsula.webp",
    title: "Family",
  },
  {
    image: "/images/Ulster Folk Museum.webp",
    title: "Golfing",
  },
];

const Experiences = () => (
  <section className="w-full bg-yellow-400 py-16 flex flex-col items-center mt-[98px] w-full max-w-[1440px] lg:max-w-[1540px] mx-auto overflow-x-hidden lg:px-35 md:px-8">
    <div className=" w-full flex flex-col items-center gap-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#0f1316]">
          Experiences we think you'll love
        </h2>
        <p className="mt-2 text-base text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
          tempus felis vitae sit est quisque.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[12px] w-full justify-items-center">
        {locations.map((loc, idx) => (
          <div key={idx} className="flex flex-col items-start gap-4 w-[366px]">
            <Image
              src={loc.image}
              alt={loc.title}
              className="object-cover rounded-2xl w-full h-[219px]"
              width={366}
              height={219}
            />
            <div className="flex flex-col gap-2 w-full">
              <h3 className="text-2xl font-bold text-[#0f1316]">{loc.title}</h3>
            </div>
            <div className="flex items-center gap-2"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experiences;
