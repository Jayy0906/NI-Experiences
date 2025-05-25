import React from "react";
import Image from "next/image";
import Link from "next/link";

const MyOrders = () => {
  return (
    <div className="bg-white font-sans">
      <div
        className="max-w-7xl mx-auto
              px-4     {{-- Default for mobile (0px - 767px) --}}
              lg:px-6  {{-- Applied from lg (1024px) and above --}}
              py-10"
      >
        <h1 className="text-2xl font-extrabold text-gray-900 mb-8">
          My Orders
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-10">
          {/* Left side - Sidebar */}
          <div className="flex flex-col space-y-6 md:w-1/3">
            <div className="bg-white rounded-xl p-8 flex flex-row md:flex-col lg:w-[300px] lg:h-[250px] h-[180px] items-center justify-start md:justify-center shadow-lg custom-shadow border border-gray-200 gap-4 md:gap-0">
              <Image
                alt="Smiling man with short hair wearing a light shirt outdoors in a park"
                className="rounded-full w-32 h-32 object-cover"
                height={120}
                src="/icons/Jhon Doe.png"
                width={120}
                quality={80}
              />
              <h2 className="mt-6 text-[29px] md:text-2xl font-bold text-black">
                Jhon Doe
              </h2>
            </div>
            <nav
              aria-label="Account navigation"
              className="mb:0 md:mb-16 font-semibold text-black text-[18px]
                         md:bg-white md:rounded-xl md:shadow-lg md:divide-y md:divide-gray-200
                         overflow-x-auto whitespace-nowrap lg:w-[300px] flex md:block
                         pb-2 md:pb-0 md:border md:border-gray-200"
            >
              <Link
                href="/account/overview"
                className="inline-block px-3 py-2 mr-4 md:block md:px-6 md:py-4 md:hover:bg-gray-50 md:focus:bg-gray-50 focus:outline-none flex-shrink-0"
              >
                Overview
              </Link>
              <Link
                href="/account/personal-information"
                className="inline-block px-3 py-2 mr-4 md:block md:px-6 md:py-4 md:hover:bg-gray-50 md:focus:bg-gray-50 focus:outline-none flex-shrink-0"
              >
                Personal Information
              </Link>
              <Link
                href="/account/my-orders"
                className="inline-block px-3 py-2 mr-4 md:block md:px-6 md:py-4 md:hover:bg-gray-50 md:focus:bg-gray-50 focus:outline-none flex-shrink-0"
              >
                My Orders
              </Link>
              <Link
                href="/account/address-book"
                className="inline-block px-3 py-2 mr-4 md:block md:px-6 md:py-4 md:hover:bg-gray-50 md:focus:bg-gray-50 focus:outline-none flex-shrink-0"
              >
                Address Book
              </Link>
              <Link
                href="/account/password-reset"
                className="inline-block px-3 py-2 md:block md:px-6 md:py-4 md:hover:bg-gray-50 md:focus:bg-gray-50 focus:outline-none flex-shrink-0" // No mr-4 on the last one
              >
                Password Reset
              </Link>
            </nav>
          </div>

          {/* Right side - Orders List */}
          <div
            className="bg-white rounded-xl p-4 sm:p-8 mt-10 md:mt-0 shadow-lg custom-shadow space-y-6
                w-full max-w-full lg:max-w-[1250px] border border-gray-200 overflow-hidden lg:h-[480px]"
          >
            {/* Order 1 */}
            <div
              className="flex flex-row space-y-4 p-4                 // Mobile: Image stacks above content, vertical space, padding
             space-x-6 sm:space-y-0 // Tablet/Desktop: Image next to content, horizontal space, no vertical space, padding
             bg-white rounded-xl border border-gray-200
             md:items-center" // Mobile: align items to start (top), Tablet/Desktop: align items to center (middle)
            >
              <Image
                alt="Old stone church building with blue sky and green grass"
                className="rounded-xl object-cover flex-shrink-0
             w-22 h-22       // Mobile image size
             md:w-32 md:h-32 // Desktop image size
            "
                height={128}
                src="/images/cultural.webp"
                width={128}
                quality={80}
              />

              <div className="flex flex-col w-full">
                <div className="flex flex-col sm:hidden w-full">
                  <div className="flex flex-col items-start justify-between w-full mb-2">
                    <p className="font-bold text-[#2F4832] text-[20px]">
                      $ 100.00
                    </p>
                    <div className="flex flex-col items-start">
                      <p className="font-semibold text-black text-[18px]">
                        Status
                      </p>
                      <div className="flex items-center space-x-1">
                        <img
                          src="/icons/dot.png"
                          alt="Order status indicator"
                          width={16}
                          height={16}
                        />
                        <p className="text-black text-[14px]">
                          Order in Progress
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row pt-2 -ml-28">
                    <div className="flex flex-col justify-between items-start mr-10 whitespace-nowrap">
                      <p className="font-semibold text-black text-[18px]">
                        Order Number
                      </p>
                      <p className="text-black text-[18px]">ZCGX56566C</p>
                    </div>
                    <div className="flex flex-col justify-between items-start whitespace-nowrap">
                      <p className="font-semibold text-black text-[18px]">
                        Order date
                      </p>
                      <span className="font-normal text-black text-[18px]">
                        20-08-2023
                      </span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex justify-between items-center mb-3">
                  <p className="font-semibold text-black text-[22px]">
                    Order date
                    <span className="font-normal ml-2 text-black">
                      20-08-2023
                    </span>
                  </p>
                  <p className="font-bold text-[#2F4832] text-[26px]">
                    $ 100.00
                  </p>
                </div>

                <div className="hidden sm:flex justify-between items-center text-[22px]">
                  <div>
                    <p className="font-semibold text-black">Order Number</p>
                    <p className="text-black">ZCGX56566C</p>
                  </div>
                  <div className="flex flex-col items-start mr-40">
                    <p className="font-semibold  text-black">Status</p>
                    <div className="flex items-center space-x-2">
                      <img
                        src="/icons/dot.png"
                        alt="Order status indicator"
                        width={20}
                        height={20}
                      />
                      <p className="text-black">Order in Progress</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Order 2 */}
            <div
              className="flex flex-row space-y-4 p-4                 // Mobile: Image stacks above content, vertical space, padding
             space-x-6 sm:space-y-0 // Tablet/Desktop: Image next to content, horizontal space, no vertical space, padding
             bg-white rounded-xl border border-gray-200
             md:items-center" 
            >
              <Image
                alt="Old stone church building with blue sky and green grass"
                className="rounded-xl object-cover flex-shrink-0
             w-22 h-22       // Mobile image size
             md:w-32 md:h-32 // Desktop image size
            "
                height={128}
                src="/images/cultural.webp"
                width={128}
                quality={80}
              />

              <div className="flex flex-col w-full">
                <div className="flex flex-col sm:hidden w-full">
                  <div className="flex flex-col items-start justify-between w-full mb-2">
                    <p className="font-bold text-[#2F4832] text-[20px]">
                      $ 100.00
                    </p>
                    <div className="flex flex-col items-start">
                      <p className="font-semibold text-black text-[18px]">
                        Status
                      </p>
                      <div className="flex items-center space-x-1">
                        <img
                          src="/icons/dot.png"
                          alt="Order status indicator"
                          width={16}
                          height={16}
                        />
                        <p className="text-black text-[14px]">
                          Order in Progress
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row pt-2 -ml-28">
                    <div className="flex flex-col justify-between items-start mr-10 whitespace-nowrap">
                      <p className="font-semibold text-black text-[18px]">
                        Order Number
                      </p>
                      <p className="text-black text-[18px]">ZCGX56566C</p>
                    </div>
                    <div className="flex flex-col justify-between items-start whitespace-nowrap">
                      <p className="font-semibold text-black text-[18px]">
                        Order date
                      </p>
                      <span className="font-normal text-black text-[18px]">
                        20-08-2023
                      </span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex justify-between items-center mb-3">
                  <p className="font-semibold text-black text-[22px]">
                    Order date
                    <span className="font-normal ml-2 text-black">
                      20-08-2023
                    </span>
                  </p>
                  <p className="font-bold text-[#2F4832] text-[26px]">
                    $ 100.00
                  </p>
                </div>

                <div className="hidden sm:flex justify-between items-center text-[22px]">
                  <div>
                    <p className="font-semibold text-black">Order Number</p>
                    <p className="text-black">ZCGX56566C</p>
                  </div>
                  <div className="flex flex-col items-start mr-40">
                    <p className="font-semibold  text-black">Status</p>
                    <div className="flex items-center space-x-2">
                      <img
                        src="/icons/dot.png"
                        alt="Order status indicator"
                        width={20}
                        height={20}
                      />
                      <p className="text-black">Order in Progress</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
