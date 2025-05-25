"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const ReviewPage = () => {
  const router = useRouter();

  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState(event.target.value);
  };

  const handleProceedToPayments = () => {
    router.push("/payment-method");
  };

  return (
    <div className="bg-transparent font-sans text-gray-900 p-6 sm:p-10 md:px-26 lg:ml-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="flex-1 max-w-full lg:max-w-[750px] flex flex-col md:order-1">
          <h2 className="text-[30px] md:text-[40px] font-extrabold mb-6 text-gray-900">
            Review Package
          </h2>

          <div className="bg-[#fff5d1] rounded-xl p-8 mb-10 max-w-full shadow-none order-1">
            <h3 className="text-[30px] md:text-[40px] font-extrabold mb-2 md:mb-3 text-gray-900 -mt-8 md:-mt-6 -ml-6 md:-ml-1">
              Glens of Antrim
            </h3>
            <div className="flex text-xs md:text-sm font-semibold text-[#9E9E9E] whitespace-nowrap -ml-5 md:-ml-0">
              <div className="min-w-[74px] border-r border-[#D9D9D9] pr-5 md:pr-8">
                <div className="text-[#9E9E9E] font-normal text-xs mb-1">
                  Review
                </div>
                <img
                  src="/icons/stars/5-star.webp"
                  alt=""
                  height={16}
                  width={60}
                  className="md:h-[20px] md:w-[104px] mr-0 md:mr-1"
                />
              </div>

              <div className="min-w-[80px] border-r border-[#D9D9D9] px-1 md:px-4">
                <div className="text-[#9E9E9E] font-normal text-xs mb-1">
                  Days
                </div>
                <div className="text-black font-normal text-[11px] md:text-base">
                  2 Days Tour
                </div>
              </div>

              <div className="min-w-[90px] border-r border-[#D9D9D9] px-1 md:px-4">
                <div className="text-[#9E9E9E] font-normal text-xs mb-1">
                  Location
                </div>
                <div className="text-black font-normal text-[11px] md:text-base">
                  Northern Ireland
                </div>
              </div>

              <div className="min-w-[90px] pl-1 md:pl-4">
                <div className="text-[#9E9E9E] font-normal text-xs mb-1">
                  Adults
                </div>
                <div className="text-black font-normal text-[11px] md:text-base">
                  2
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6 text-xs font-normal text-black whitespace-nowrap -ml-5 md:-ml-0 mr-0 md:mr-28">
              <span>Aug 12, 2023</span>
              <span className="border-t border-dashed border-black w-full mx-4 self-center"></span>
              <span className="lg:mr-28">Aug 16, 2023</span>
            </div>
          </div>

          <aside className="w-full max-w-md bg-white rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.3)] self-start order-2 md:hidden mb-10 md:mb-0">
            <div className="mb-6">
              <span className="text-4xl font-extrabold">$100</span>
              <span className="text-sm font-normal">
                (Inclusive of All Taxes)
              </span>
            </div>

            <hr className="border-t border-gray-200 mb-7" />

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm text-gray-900 mb-1">
                    Total Basic Cost
                  </p>
                  <p className="text-xs text-gray-900">$100 x 2 Travelers</p>
                </div>
                <div className="font-bold text-gray-900 text-[20px]">$200</div>
              </div>
              <hr className="border-t border-gray-200" />

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm text-gray-900 mb-1">
                    Coupon Discount
                  </p>
                  <span className="inline-block bg-[#F9C401] text-[10px] font-semibold rounded px-2 py-[2px] text-black">
                    BESTOFFER50
                  </span>
                </div>
                <div className="font-bold text-gray-900 text-[20px]">-$50</div>
              </div>
              <hr className="border-t border-gray-200" />

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm text-gray-900 mb-1">
                    Fee & Taxes
                  </p>
                  <p className="text-xs text-gray-900">$100 x 2 Travelers</p>
                </div>
                <div className="font-bold text-gray-900 text-[20px]">+$50</div>
              </div>
            </div>

            <button
              type="button"
              className="mt-8 w-full bg-[#2F4832] text-white rounded-lg py-3 text-center font-normal text-base hover:bg-[#2e3a2b] transition-colors cursor-pointer"
              onClick={handleProceedToPayments}
            >
              Proceed To Payments
            </button>
          </aside>

          <form className="space-y-6 max-w-full order-3 mb-10">
            <h4 className="text-gray-900 font-semibold mb-2 text-lg">
              Please Enter Contact Details
            </h4>

            <div>
              <label
                htmlFor="mobile"
                className="block text-[12px] text-black-600 mb-1"
              >
                Mobile Number
              </label>
              <input
                id="mobile"
                type="text"
                placeholder="Enter Mobile Number"
                className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9C401]"
              />
            </div>

            <div>
              <label
                htmlFor="address1"
                className="block text-[12px] text-black-600 mb-1"
              >
                Flat, House no., Building, Company, Apartment
              </label>
              <input
                id="address1"
                type="text"
                placeholder=""
                className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9C401]"
              />
            </div>

            <div>
              <label
                htmlFor="address2"
                className="block text-[12px] text-black-600 mb-1"
              >
                Area, Colony, Street, Sector, Village
              </label>
              <input
                id="address2"
                type="text"
                placeholder=""
                className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9C401]"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-[12px] text-black-600 mb-1"
              >
                City
              </label>
              <div className="relative">
                <select
                  id="city"
                  className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm text-black-400 focus:outline-none focus:ring-2 focus:ring-[#F9C401] appearance-none pr-8"
                  aria-label="Select City"
                  value={city}
                  onChange={handleCityChange}
                >
                  <option disabled value="">
                    Select City
                  </option>
                  <option value="City 1">City 1</option>
                  <option value="City 2">City 2</option>
                  <option value="City 3">City 3</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
                  <FontAwesomeIcon icon={faCaretDown} className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="pin"
                className="block text-[12px] text-black-600 mb-1"
              >
                Pin Code
              </label>
              <input
                id="pin"
                type="text"
                placeholder="Enter Pin Code"
                className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9C401]"
              />
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-[12px] text-black-600 mb-1"
              >
                State
              </label>
              <div className="relative">
                <select
                  id="state"
                  className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm text-black-400 focus:outline-none focus:ring-2 focus:ring-[#F9C401] appearance-none pr-8"
                  aria-label="Select State"
                  value={state}
                  onChange={handleStateChange}
                >
                  <option disabled value="">
                    Select State
                  </option>
                  <option value="State 1">State 1</option>
                  <option value="State 2">State 2</option>
                  <option value="State 3">State 3</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
                  <FontAwesomeIcon icon={faCaretDown} className="h-4 w-4" />
                </div>
              </div>
            </div>
          </form>
        </div>

        <aside className="hidden md:block w-full lg:w-[360px] lg:h-[445px] lg:mt-20.5 lg:ml-25 max-w-md bg-white rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.3)] self-start md:order-2">
          <div className="mb-6">
            <span className="text-4xl font-extrabold">$100</span>
            <span className="text-sm font-normal">
              (Inclusive of All Taxes)
            </span>
          </div>

          <hr className="border-t border-gray-200 mb-7" />

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-sm text-gray-900 mb-1">
                  Total Basic Cost
                </p>
                <p className="text-xs text-gray-900">$100 x 2 Travelers</p>
              </div>
              <div className="font-bold text-gray-900 text-[20px]">$200</div>
            </div>
            <hr className="border-t border-gray-200" />

            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-sm text-gray-900 mb-1">
                  Coupon Discount
                </p>
                <span className="inline-block bg-[#F9C401] text-[10px] font-semibold rounded px-2 py-[2px] text-black">
                  BESTOFFER50
                </span>
              </div>
              <div className="font-bold text-gray-900 text-[20px]">-$50</div>
            </div>
            <hr className="border-t border-gray-200" />

            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-sm text-gray-900 mb-1">
                  Fee & Taxes
                </p>
                <p className="text-xs text-gray-900">$100 x 2 Travelers</p>
              </div>
              <div className="font-bold text-gray-900 text-[20px]">+$50</div>
            </div>
          </div>

          <button
            type="button"
            className="mt-8 w-full bg-[#2F4832] text-white rounded-lg py-3 text-center font-normal text-base hover:bg-[#2e3a2b] transition-colors cursor-pointer"
            onClick={handleProceedToPayments}
          >
            Proceed To Payments
          </button>
        </aside>
      </div>
    </div>
  );
};

export default ReviewPage;