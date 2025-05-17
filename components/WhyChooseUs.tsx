import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <>
      <section className="bg-white text-gray-900 font-sans">
        <section className="max-w-7xl mx-auto px-6 py-20  w-full max-w-[1440px] mx-auto overflow-x-hidden">
          <h2
            className="text-3xl font-extrabold text-gray-900 text-center mb-2"
            style={{ color: "#12181b" }}
          >
            Why Choose Us
            <span className="inline-block">😇</span>
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            tempus felis vitae sit est quisque.
          </p>

          <div className="flex flex-col lg:flex-row md:items-center md:justify-center lg:items-center lg:justify-center gap-12 lg:gap-24 relative">
            {/* Left side content */}
            <div className="flex flex-col space-y-10 max-w-lg w-full">
              {/* Item 1 */}
              <div className="flex flex-col items-center md:flex-row items-start md:space-x-6 space-y-3 md:space-y-0 lg:flex-col lg:items-start lg:space-x-0 lg:space-y-3">
                <span className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/icons/medal.webp"
                    alt="Best choice"
                    className="w-14 h-14"
                  />
                </span>
                <div className="text-left max-w-[350px] md:max-w-[450px] lg:max-w-[400px] lg:text-start">
                  <h3
                    className="font-extrabold text-gray-900 mb-1"
                    style={{ color: "#12181b" }}
                  >
                    We provide best choice for you
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    We always prioritize our customer comfort and satisfaction.
                    That’s why we only accept the best hotel and destination
                  </p>
                  <hr className="border-gray-300 mt-6 w-120" />
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center md:flex-row items-start md:space-x-6 space-y-3 md:space-y-0 lg:flex-col lg:items-start lg:space-x-0 lg:space-y-3">
                <span className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/icons/medal.webp"
                    alt="Best choice"
                    className="w-14 h-14"
                  />
                </span>
                <div className="text-left max-w-[350px] md:max-w-[450px] lg:max-w-[400px] lg:text-start">
                  <h3
                    className="font-extrabold text-gray-900 mb-1"
                    style={{ color: "#12181b" }}
                  >
                    Low price with best quality
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Although the price tends to be cheaper but it will not
                    affect the quality of service
                  </p>
                  <hr className="border-gray-300 mt-6 w-120" />
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center md:flex-row items-start md:space-x-6 space-y-3 md:space-y-0 lg:flex-col lg:items-start lg:space-x-0 lg:space-y-3">
                <span className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/icons/medal.webp"
                    alt="Best choice"
                    className="w-14 h-14"
                  />
                </span>
                <div className="text-left max-w-[350px] md:max-w-[450px] lg:max-w-[400px] lg:text-start">
                  <h3
                    className="font-extrabold text-gray-900 mb-1"
                    style={{ color: "#12181b" }}
                  >
                    Refund and Reschedule
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Don’t worry if suddenly you have problem and want to
                    reschule or refund, you can get fully.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side content */}
            <div className="relative flex-shrink-0 w-[350px] h-[586px] md:w-[600px] md:h-[600px] lg:w-[600px] lg:h-[600px]">
              <Image
                alt="A white house with a lighthouse on a green cliff overlooking the ocean with a winding path"
                className="rounded-3xl md:w-full md:h-auto object-cover"
                height={586}
                src="/images/lighthouse.webp"
                width={400}
                layout="responsive"
              />

              {/* Top left testimonial card */}
              <div
                className="absolute top-0 -left-0 md:top-6 md:-left-20 lg:top-6 lg:-left-20 bg-white rounded-xl p-5 w-[160px] h-[90px] md:w-[169px] md:h-[136px] lg:w-[169px] g:h-[136px] flex flex-col items-center shadow-2xl"
                style={{ zIndex: 10 }}
              >
                <Image
                  alt="Photo of Johnson Watson, a man with curly hair and beard, smiling"
                  className="rounded-full -mt-4 md:-mt-3 lg:-mt-3 w-8 h-8 md:w-12 md:h-12 lg:w-12 lg:h-12 mb-3 object-cover"
                  height={18}
                  src="/icons/johnson-watson.webp"
                  width={18}
                />
                <p className="font-extrabold text-[12px] md:text-[16px] lg:text-[16px] text-black -mt-2 md:-mt-0 lg:-mt-0 mb-1">
                  Johnson Watson
                </p>
                <div className="flex items-center space-x-2 rounded-md px-2 py-1 w-max -mt-0 md:-mt-0 lg:-mt-0">
                  <span className="flex items-center gap-1 bg-yellow-100 px-2 py-0 md:py-1 lg:py-1 rounded">
                    <img
                      src="/icons/star.webp"
                      alt="Star"
                      className="w-4 h-4"
                    />
                    <span className="text-black text-[10px] md:text-[14px] lg:text-[14px]">
                      5.0
                    </span>
                  </span>
                  <span className="text-black text-[10px] md:text-[14px] lg:text-[14px]">
                    (6.0k Review)
                  </span>
                </div>
              </div>

              {/* Bottom right experience card */}
              <div
                className="absolute bottom-50 -right-0 md:-bottom-16 md:-right-8 lg:-bottom-16 lg:-right-8 bg-white rounded-xl p-5 w-64 flex flex-col items-center shadow-xl"
                style={{ zIndex: 10 }}
              >
                <p className="font-extrabold text-black mb-3">
                  How your Experience?
                </p>
                <div className="flex space-x-6 text-3xl">
                  <span>😀</span>
                  <span>😐</span>
                  <span>☹️</span>
                  <span>😡</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
