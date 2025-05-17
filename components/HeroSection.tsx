"use client";

import React from "react";
import Image from "next/image";

// Adventure Hero component (main wrapper)
export const AdventureHero = () => {
  return (
    <main className="pb-14 text-base text-white rounded-none">
      <HeroSection />
      <FeaturesGrid />
    </main>
  );
};

export const HeroSection = () => {
  return (
    <section className="flex relative flex-col items-center px-5 md:px-20 pt-16 min-h-[460px] w-full max-w-[1440px] lg:max-w-[1540px] mx-auto overflow-x-hidden">
      {" "}
      <Image
        src="/images/hero.webp"
        alt="Northern Ireland landscape"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center md:items-start lg:items-start mb-0 w-full max-w-[1140px] max-md:mb-2.5">
        <h1 className="text-4xl md:text-5xl font-bold max-w-[696px] leading-tight text-center md:text-left lg:text-left">
          {" "}
          {/* Adjusted text size classes and added leading-tight */}
          Adventure Awaits-Experience Northern Ireland
        </h1>
        <h2 className="mt-8 text-lg md:text-xl font-bold leading-7 md:leading-8 max-w-[620px] text-center md:text-left lg:text-left">
          {" "}
          {/* Adjusted text size classes and leading */}
          We always make our customer happy by providing as{" "}
          <br className="hidden sm:block" />{" "}
          {/* Optional: hide break on small screens */}
          many choices as possible
        </h2>
        <button className="inline-flex items-center justify-center px-6 py-3 mt-5 leading-loose text-black bg-yellow-400 rounded-xl min-h-[50px] hover:bg-yellow-500 transition-colors cursor-pointer">
          {" "}
          {/* Added hover effect and transition */}
          Experience good times Now!
        </button>
      </div>
    </section>
  );
};

// Features Grid component
export const FeaturesGrid = () => {
  const features = [
    {
      imageSrc: "/icons/hand-holding-dollar.webp",
      title: "Unbeatable Value",
      description: "With a price guarantee",
    },
    {
      imageSrc: "/icons/star-tag.webp",
      title: "Trusted by thousands",
      description: "4.5/5 Feefo rating",
    },
    {
      imageSrc: "/icons/users-group.webp",
      title: "Supported by locals",
      description: "Aussie owned & operated",
    },
    {
      imageSrc: "/icons/user-heart.webp",
      title: "Here to help",
      description: "363 days of support",
    },
  ];

  return (
    <section className="flex flex-col justify-center p-4 md:p-7 -mt-10 md:-mt-15 lg:-mt-15 w-full md:max-w-[800px] lg:max-w-[1140px] max-w-[370px] mx-auto leading-loose bg-white rounded-[30px] text-neutral-900 shadow-lg">
      <div className="grid grid-cols-4 lg:grid-cols-4 gap-8 justify-items-center w-full z-10">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            imageSrc={feature.imageSrc}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

// Feature Card component
export const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col items-center sm:flex-row md:gap-3.5 lg:gap-3.5 min-w-[21px] md:text-left lg:text-left text-center md:text-base lg:text-base text-xs">
      <Image
        src={imageSrc}
        alt={title}
        width={54}
        height={54}
        className="object-contain shrink-0 rounded-full"
      />
      <div className="flex flex-col justify-center">
        <h3 className="font-bold mt-2 sm:mt-0">{title}</h3>
        <p className="mt-1.5 text-sm hidden lg:block">{description}</p>
      </div>
    </article>
  );
};

export default AdventureHero;
