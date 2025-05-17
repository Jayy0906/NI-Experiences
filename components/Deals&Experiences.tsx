"use client";
import React, { useRef, useEffect } from "react";

// Rating badge component
interface RatingBadgeProps {
  rating: number;
  showIcon?: boolean;
}

const RatingBadge: React.FC<RatingBadgeProps> = ({
  rating,
  showIcon = false,
}) => (
  <div className="flex gap-1.5 justify-center items-center self-stretch px-2 py-0.5 my-auto whitespace-nowrap rounded-lg bg-yellow-100 bg-opacity-10 min-h-[26px]">
    {showIcon && (
      <img
        src="/icons/star.webp"
        alt="Rating star"
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
      />
    )}
    <span className="self-stretch my-auto text-neutral-900">{rating}</span>
  </div>
);

// Destination card component
interface DestinationCardProps {
  imageSrc: string;
  title: string;
  price: string;
  rating: number;
  reviews: number;
  showRatingIcon?: boolean;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  imageSrc,
  title,
  price,
  rating,
  reviews,
  showRatingIcon = false,
}) => (
  <article className="min-w-[320px] w-[366px] lg:min-w-[440px] lg:w-[440px]">
    <img
      src={imageSrc}
      alt={title}
      className="object-cover rounded-3xl w-[366px] h-[205px] lg:w-[440px] lg:h-[246px]"
    />
    <div className="mt-4 w-full">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-neutral-900">{title}</h2>
        <p className="mt-2 text-base leading-loose text-neutral-900">
          Starting at ${price}
        </p>
      </div>
      <div className="flex gap-2 items-center mt-4 w-full text-sm leading-loose">
        <RatingBadge rating={rating} showIcon={showRatingIcon} />
        <span className="self-stretch my-auto text-neutral-900">
          ({(reviews / 1000).toFixed(1)}k Review)
        </span>
      </div>
    </div>
  </article>
);

// Location filter component
const locations = [
  { name: "Belfast", active: true },
  { name: "Antrim", active: false },
  { name: "Bangor", active: false },
  { name: "Lisburn", active: false },
  { name: "Ards", active: false },
  { name: "Derry", active: false },
  { name: "Downpatrick", active: false },
  { name: "Portrush", active: false },
];

const LocationFilter: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Mouse drag-to-scroll logic
    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      nav.classList.add("cursor-grabbing");
      startX.current = e.pageX - nav.offsetLeft;
      scrollLeft.current = nav.scrollLeft;
    };

    const onMouseLeave = () => {
      isDragging.current = false;
      nav.classList.remove("cursor-grabbing");
    };

    const onMouseUp = () => {
      isDragging.current = false;
      nav.classList.remove("cursor-grabbing");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - nav.offsetLeft;
      const walk = (x - startX.current) * 1;
      nav.scrollLeft = scrollLeft.current - walk;
    };

    nav.addEventListener("mousedown", onMouseDown);
    nav.addEventListener("mouseleave", onMouseLeave);
    nav.addEventListener("mouseup", onMouseUp);
    nav.addEventListener("mousemove", onMouseMove);

    // Prevent image dragging (if any)
    const imgs = nav.querySelectorAll("img");
    imgs.forEach((img) => img.setAttribute("draggable", "false"));

    return () => {
      nav.removeEventListener("mousedown", onMouseDown);
      nav.removeEventListener("mouseleave", onMouseLeave);
      nav.removeEventListener("mouseup", onMouseUp);
      nav.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="
        flex gap-5 mt-5 text-base
        overflow-x-auto whitespace-nowrap
        w-full lg:justify-center cursor-grab select-none
      "
      style={{
        overflowX: "auto",
        scrollbarWidth: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {locations.map((location) => (
        <button
          key={location.name}
          className={`gap-2.5 self-stretch px-5 py-3 rounded-xl min-h-[50px] cursor-pointer ml-2 md:ml-2 lg:ml-0 ${
            location.active
              ? "text-white bg-yellow-400"
              : "text-neutral-900 bg-gray-100 bg-opacity-10 hover:bg-yellow-400 hover:text-white"
          }`}
        >
          {location.name}
        </button>
      ))}
    </nav>
  );
};

// Main section
const TopDealsSection: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      el.classList.add("cursor-grabbing");
      startX.current = e.pageX - el.offsetLeft;
      scrollLeft.current = el.scrollLeft;
    };

    const onMouseLeave = () => {
      isDragging.current = false;
      el.classList.remove("cursor-grabbing");
    };

    const onMouseUp = () => {
      isDragging.current = false;
      el.classList.remove("cursor-grabbing");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX.current) * 1; // scroll-fastness
      el.scrollLeft = scrollLeft.current - walk;
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
    <section className="flex flex-col items-center text-neutral-900 w-full max-w-[1440px] mx-auto overflow-x-hidden">
      <h1 className="z-10 mt-0 text-4xl font-bold text-center capitalize text-neutral-900 max-md:max-w-full">
        Top deals & experiences
      </h1>
      <LocationFilter />
      <div
        ref={cardsRef}
        className="flex flex-nowrap gap-[21px] items-start self-stretch mt-5 overflow-x-auto ml-2 md:ml-2 lg:ml-0 cursor-grab select-none"
        style={{
          overflowX: "auto",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <DestinationCard
          imageSrc="/images/Carrickfergus Castle.webp"
          title="Carrickfergus Castle"
          price="2000"
          rating={5.0}
          reviews={2500}
          showRatingIcon
        />
        <DestinationCard
          imageSrc="/images/Carrickfergus Castle.webp"
          title="Carrickfergus Castle"
          price="2000"
          rating={5.0}
          reviews={2500}
          showRatingIcon
        />
        <DestinationCard
          imageSrc="/images/Ards Peninsula.webp"
          title="Ards Peninsula"
          price="35"
          rating={5.0}
          reviews={6000}
          showRatingIcon
        />
        <DestinationCard
          imageSrc="/images/Ulster Folk Museum.webp"
          title="Ulster Folk Museum"
          price="25"
          rating={4.5}
          reviews={12000}
          showRatingIcon
        />
        <DestinationCard
          imageSrc="/images/Ulster Folk Museum.webp"
          title="Ulster Folk Museum"
          price="25"
          rating={4.5}
          reviews={12000}
          showRatingIcon
        />
      </div>
    </section>
  );
};
export default TopDealsSection;
