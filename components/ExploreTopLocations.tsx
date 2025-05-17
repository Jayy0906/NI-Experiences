"use client";
import React, { useRef, useEffect } from "react";

// Dummy Star Icon (replace with your own SVG if needed)
const Star: React.FC<{ className?: string; color?: string }> = ({
  className = "",
  color = "#FFCA01",
}) => (
  <svg
    className={className}
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      fill={color}
    />
  </svg>
);

// Simple Button with optional icon
const RatingButton: React.FC<{ rating: string; icon?: React.ReactNode }> = ({
  rating,
  icon,
}) => (
  <span className="flex items-center gap-1 px-2 py-0.5 bg-yellow-100 rounded text-sm font-medium text-[#0f1316]">
    {icon}
    {rating}
  </span>
);

// Card data
const locations = [
  {
    image: "/images/Carrickfergus Castle.webp",
    title: "Carrickfergus Castle",
    price: "2000",
    rating: "5.0",
    reviews: "2.5k",
    icon: <Star className="w-4 h-4" />,
    width: "w-[129px]",
  },
  {
    image: "/images/Carrickfergus Castle.webp",
    title: "Carrickfergus Castle",
    price: "20",
    rating: "5.0",
    reviews: "2.5k",
    icon: <Star className="w-4 h-4" />,
    width: "w-[366px]",
  },
  {
    image: "/images/Ards Peninsula.webp",
    title: "Ards Peninsula",
    price: "35",
    rating: "5.0",
    reviews: "6.0k",
    icon: <Star className="w-4 h-4" />,
    width: "w-[366px]",
  },
  {
    image: "/images/Ulster Folk Museum.webp",
    title: "Ulster Folk Museum",
    price: "25",
    rating: "4.5",
    reviews: "12.0k",
    icon: <Star className="w-4 h-4" />,
    width: "w-[366px]",
  },
  {
    image: "/images/Ulster Folk Museum.webp",
    title: "Ulster Folk Museum",
    price: "1500",
    rating: "4.5",
    reviews: "12.0k",
    icon: <Star className="w-4 h-4" />,
    width: "w-[129px]",
  },
];

const ExploreTopLocations: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

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
      const walk = (x - startX) * 1;
      el.scrollLeft = scrollLeft - walk;
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
    <section className="w-full bg-yellow-400 h-[539px] lg:h-[469px] md:h-[469px] flex flex-col items-center mt-[98px] w-full max-w-[1440px] lg:max-w-[1540px] mx-auto ">
      <div className="w-full flex flex-col items-center gap-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mt-[100px] text-[#0f1316]">
            Explore Top Locations ✈
          </h2>
          <p className="mt-2 text-base text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            tempus felis vitae sit est quisque.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="flex flex-row gap-[21px] w-full overflow-x-auto flex-nowrap scrollbar-hide pl-4 cursor-grab select-none"
          style={{
            overflowX: "auto",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start gap-4 max:w-[366px] flex-shrink-0"
            >
              <img
                src={loc.image}
                alt={loc.title}
                className="object-cover rounded-2xl w-[326px] h-[350px]"
              />
              <div className="flex flex-col gap-2 w-full">
                <h3 className="text-2xl font-bold text-[#0f1316]">
                  {loc.title}
                </h3>
                <span className="text-base text-[#0f1316]">
                  Starting at ${loc.price}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <RatingButton rating={loc.rating} icon={loc.icon} />
                <span className="text-sm text-[#0f1316]">
                  ({loc.reviews} Review)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreTopLocations;
