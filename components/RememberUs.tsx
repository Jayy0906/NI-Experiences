import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/solid";

interface StatisticItemProps {
  value: string;
  label: string;
  isFirst?: boolean;
}

const StatisticItem = ({ value, label, isFirst }: StatisticItemProps) => (
  <div
    className={`py-6 flex flex-col items-center ${
      !isFirst ? "border-l border-gray-300" : ""
    }`}
  >
    <div className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl">
      {value}
    </div>
    <div className="text-base font-normal mt-1">{label}</div>
  </div>
);

const statistics = [
  { value: "50K+", label: "Satisfied Customers" },
  { value: "2.5K+", label: "Active Members" },
  { value: "250+", label: "Tour Destination" },
  { value: "80+", label: "Travel Guides" },
];

export default function TravelReady() {
  return (
    <div className="m-0 p-0 font-sans -mt-[230px] md:mt-[100px] lg:mt-[100px]">
      <div className="relative w-full max-w-[1440px] lg:max-w-[1540px] mx-auto overflow-hidden min-h-[400px] max-h-[800px] md:max-h-[700px] lg:max-h-[700px]">
        <Image
          alt="Scenic coastal village..."
          src="/images/RememberUs.webp"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-10"
        />

        {/* Statistics Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-b-3xl flex justify-center text-center text-black font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl relative z-0">
          <div className="grid grid-cols-2 md:grid-cols-4 w-full max-w-7xl">
            {statistics.map((item, index) => (
              <StatisticItem key={item.label} {...item} isFirst={index === 0} />
            ))}
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6 pt-20 pb-32 text-slate-200 relative z-0">
          {/* Play Button */}
          <button
            aria-label="Play video"
            className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 bg-opacity-90 hover:bg-opacity-100 transition relative"
          >
            <span
              aria-hidden="true"
              className="absolute w-16 h-16 rounded-full bg-slate-300 bg-opacity-20 animate-ping"
            ></span>
            <span
              aria-hidden="true"
              className="absolute w-24 h-24 rounded-full bg-slate-300 bg-opacity-10 animate-ping"
            ></span>
            <PlayIcon className="w-12 h-12 text-yellow-400 relative z-10 ml-1" />
          </button>
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mt-14">
            Are You Ready To Travel?
            <br />
            Remember Us
            <span aria-label="heart emoji" role="img">
              ❤️
            </span>
          </h1>
          {/* Paragraph */}
          <p className="mt-4 text-base sm:text-base max-w-xl leading-relaxed">
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here'
          </p>
          {/* Buttons */}
          <div className="mt-10 flex space-x-6">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md px-8 py-3 transition cursor-pointer">
              View Package
            </button>
            <button className="border border-slate-300 text-slate-300 hover:bg-yellow-500 hover:text-white font-medium rounded-md px-8 py-3 transition cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
