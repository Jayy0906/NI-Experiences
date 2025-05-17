import Image from "next/image";

export default function CustomerTestimonials() {
  return (
    <>
      <div className="bg-white text-black font-sans w-full max-w-[1440px] mx-auto overflow-x-hidden px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Adjusted padding for different breakpoints */}
        <div className="max-w-7xl mx-auto py-16 flex flex-col lg:flex-row lg:items-start lg:gap-20 md:items-start">
          {/* Left side content */}
          <div className="md:w-full max-w-lg md:max-w-4xl lg:max-w-xl">
            <h1 className="text-3xl md:text-4xl md:px-1 lg:text-5xl font-extrabold leading-tight text-gray-900 mb-6 md:text-center lg:text-left">
              What Our Customer’s{" "}
              <span className="block md:inline">Say About Us</span>
            </h1>
            <p className="text-sm md:text-lg lg:text-lg text-gray-500 mb-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            {/* Star Ratings */}
            <div className="flex space-x-2 mb-8">
              <img src="/icons/star.webp" alt="Star" className="w-8 h-8" />
              <img src="/icons/star.webp" alt="Star" className="w-8 h-8" />
              <img src="/icons/star.webp" alt="Star" className="w-8 h-8" />
              <img src="/icons/star.webp" alt="Star" className="w-8 h-8" />
              <img src="/icons/star.webp" alt="Star" className="w-8 h-8" />
            </div>

            {/* Testimonial Quote */}
            <p className="text-black text-sm md:text-lg lg:text-lg mb-6">
              “t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-6">
              <Image
                src="/icons/Smith Johnson.webp"
                alt="Portrait"
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover"
                layout="intrinsic"
              />
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
                  Smith Johnson
                </h2>
                <p className="text-lg text-gray-700">London, United Kingdom</p>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex space-x-3 mt-12">
              <span className="w-3 h-3 rounded-full bg-green-700 cursor-pointer"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></span>
            </div>
          </div>

          {/* Right side content (Map and Faces) */}
          <div className="md:w-200 relative mt-10 md:mt-24 lg:mt-20 flex justify-center">
            <Image
              src="/images/map.webp"
              alt="World map made of small green dots on transparent background"
              className="w-full max-w-4xl"
              height={400}
              width={800}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </>
  );
}
