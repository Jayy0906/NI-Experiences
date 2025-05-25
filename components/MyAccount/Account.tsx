import React from "react";
import Image from "next/image";
import Link from "next/link";

const MyAccount = () => {
  return (
    <div className="bg-transparent p-6 lg:ml-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center text-left">
          My Account
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl lg:w-[300px] lg:h-[250px] h-[180px] border border-gray-200 shadow-lg p-6 flex flex-row md:flex-col items-center md:justify-center justify-start gap-4 md:gap-0">
              <Image
                alt="Smiling man outdoors portrait with green grass and buildings in background"
                className="rounded-full w-28 h-28 object-cover mb-4"
                height={120}
                src="/icons/Jhon Doe.png"
                width={120}
                quality={80}
              />
              <h2 className="text-[33px] md:text-2xl font-extrabold text-black">
                Jhon Doe
              </h2>
            </div>
            <nav
              aria-label="Account navigation"
              className="flex overflow-x-auto whitespace-nowrap py-2 px-4 space-x-4 text-sm mb-4
             bg-transparent shadow-none rounded-none divide-y-0
             lg:block lg:bg-white lg:rounded-xl lg:mb-16 lg:shadow-lg lg:divide-y lg:divide-gray-200 lg:font-semibold lg:text-black lg:text-[18px] lg:w-[300px] lg:border lg:border-gray-200"
            >
              <Link
                href="/account/overview"
                className="flex-shrink-0 px-4 py-2 border-b-2 border-transparent
               hover:text-black hover:border-gray-300
               focus:outline-none focus:text-blue-600 focus:border-blue-600
               lg:block lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:focus:bg-gray-50 lg:text-black lg:border-b-0"
              >
                Overview
              </Link>
              <hr />
              <Link
                href="/account/personal-information"
                className="flex-shrink-0 px-4 py-2 border-b-2 border-transparent
               hover:text-black hover:border-gray-300
               focus:outline-none focus:text-blue-600 focus:border-blue-600
               lg:block lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:focus:bg-gray-50 lg:text-black lg:border-b-0"
              >
                Personal Information
              </Link>
              <hr />
              <Link
                href="/account/my-orders"
                className="flex-shrink-0 px-4 py-2 border-b-2 border-transparent
               hover:text-black hover:border-gray-300
               focus:outline-none focus:text-blue-600 focus:border-blue-600
               lg:block lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:focus:bg-gray-50 lg:text-black lg:border-b-0"
              >
                My Orders
              </Link>
              <hr />
              <Link
                href="/account/address-book"
                className="flex-shrink-0 px-4 py-2 border-b-2 border-transparent
               hover:text-black hover:border-gray-300
               focus:outline-none focus:text-blue-600 focus:border-blue-600
               lg:block lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:focus:bg-gray-50 lg:text-black lg:border-b-0"
              >
                Address Book
              </Link>
              <hr />
              <Link
                href="/account/password-reset"
                className="flex-shrink-0 px-4 py-2 border-b-2 border-transparent
               hover:text-black hover:border-gray-300
               focus:outline-none focus:text-blue-600 focus:border-blue-600
               lg:block lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:focus:bg-gray-50 lg:text-black lg:border-b-0"
              >
                Password Reset
              </Link>
            </nav>
          </div>
          {/* Right column */}
          <div className="md:col-span-2 space-y-6 w-full lg:w-[910px] lg:-ml-24">
            <div className="bg-white rounded-xl shadow-lg h-50 border border-gray-200">
              <h3
                className="text-black font-extrabold text-[27px] ml-6 mt-6 mb-4"
                id="my-orders-title"
              >
                My Orders
              </h3>
              <p className="text-center text-gray-400 font-semibold mt-10">
                No ongoing orders
              </p>
            </div>
            <section
              aria-labelledby="contact-preferences-title"
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            >
              <h3
                className="text-black font-extrabold text-[23px] md:text-[27px] mb-4"
                id="contact-preferences-title"
              >
                CONTACT PREFERENCES
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <button
                  className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-12 space-y-2 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  type="button"
                >
                  <img src="icons/msg.png" alt="" width={40} height={33} />
                  <span className="text-xs text-gray-400 cursor-pointer">
                    Email newsletter
                  </span>
                </button>
                <button
                  className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4 space-y-2 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  type="button"
                >
                  <img src="icons/phone.png" alt="" width={25} height={33} />
                  <span className="text-xs text-gray-400 cursor-pointer">
                    Phone
                  </span>
                </button>
                <button
                  className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4 space-y-2 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  type="button"
                >
                  <img src="icons/chat.png" alt="" width={40} height={33} />
                  <span className="text-xs text-gray-400 cursor-pointer">
                    Text
                  </span>
                </button>
                <button
                  className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4 space-y-2 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  type="button"
                >
                  <img src="icons/mail.png" alt="" width={40} height={33} />
                  <span className="text-xs text-gray-400 cursor-pointer">
                    Mail
                  </span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
