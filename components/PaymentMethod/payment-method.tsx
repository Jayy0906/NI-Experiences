"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const PaymentMethod = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleProceedToPayments = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const goToTripDetails = () => {
    setIsPopupOpen(false);
  };

  const goToHome = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-white p-6 max-w-7xl mx-auto lg:flex lg:items-start lg:gap-18 relative">
      <div className="mb-18 lg:flex-1">
        <h1 className="text-[30px] md:text-[40px] font-extrabold text-gray-900 mb-6">
          Payment Method
        </h1>

        <h2 className="text-[15px] font-semibold text-gray-900 mb-6">
          Select a payment method
        </h2>

        <form className="space-y-6">
          <fieldset>
            <legend className="sr-only">Payment Method</legend>

            <label className="flex items-center space-x-3 mb-6 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="card"
                defaultChecked
                className="w-5 h-5 text-green-600 border-green-600 focus:ring-green-600"
              />
              <span className="text-[15px] font-semibold text-gray-900 select-none">
                Debit/Credit Card
              </span>
            </label>

            <div className="mb-4">
              <label
                htmlFor="card-number"
                className="block text-sm text-gray-700 mb-1"
              >
                Card Number
              </label>
              <input
                id="card-number"
                name="card-number"
                type="text"
                placeholder="3897 22XX 1900 3890"
                className="w-full rounded-lg border border-yellow-400 px-4 py-3 text-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                defaultValue="3897 22XX 1900 3890"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="card-name"
                className="block text-sm text-gray-700 mb-1"
              >
                Card Name
              </label>
              <input
                id="card-name"
                name="card-name"
                type="text"
                placeholder="Robert Fox"
                className="w-full rounded-lg border border-yellow-400 px-4 py-3 text-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                defaultValue="Robert Fox"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label
                  htmlFor="expiry-date"
                  className="block text-sm text-gray-700 mb-1"
                >
                  Expiry Date
                </label>
                <input
                  id="expiry-date"
                  name="expiry-date"
                  type="text"
                  placeholder="09/26"
                  className="w-full rounded-lg border border-yellow-400 px-4 py-3 text-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  defaultValue="09/26"
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block text-sm text-gray-700 mb-1"
                >
                  CVV
                </label>
                <input
                  id="cvv"
                  name="cvv"
                  type="password"
                  placeholder="•••"
                  className="w-full rounded-lg border border-yellow-400 px-4 py-3 text-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  defaultValue="•••"
                />
              </div>
            </div>

            <button
              type="button"
              className="flex items-center justify-center w-[280px] lg:w-[340px] h-[56px] space-x-3 bg-yellow-400 hover:bg-yellow-500 text-white text-lg font-medium rounded-lg px-6 py-4 cursor-pointer mx-auto md:mx-0"
            >
              {/* New wrapper for the icon to apply border */}
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-white">
                <FontAwesomeIcon icon={faPlus} className="text-base" />
              </span>
              <span>Add New Card</span>
            </button>
          </fieldset>

          <fieldset className="space-y-6 mt-10">
            <label className="flex items-center space-x-3 cursor-pointer border-t border-gray-300 pt-6">
              <input
                type="radio"
                name="payment"
                value="google-pay"
                className="w-5 h-5 text-gray-900 border-gray-900 focus:ring-gray-900"
              />
              <span className="text-xl font-semibold text-gray-900 select-none">
                Google Pay
              </span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer border-t border-gray-300 pt-6">
              <input
                type="radio"
                name="payment"
                value="apple-pay"
                className="w-5 h-5 text-gray-900 border-gray-900 focus:ring-gray-900"
              />
              <span className="text-xl font-semibold text-gray-900 select-none">
                Apple Pay
              </span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer border-t border-gray-300 pt-6">
              <input
                type="radio"
                name="payment"
                value="paypal"
                className="w-5 h-5 text-gray-900 border-gray-900 focus:ring-gray-900"
              />
              <span className="text-xl font-semibold text-gray-900 select-none">
                Paypal
              </span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer border-t border-gray-300 pt-6">
              <input
                type="radio"
                name="payment"
                value="cash-on-delivery"
                className="w-5 h-5 text-gray-900 border-gray-900 focus:ring-gray-900"
              />
              <span className="text-xl font-semibold text-gray-900 select-none">
                Cash on Delivery
              </span>
            </label>
          </fieldset>
        </form>
      </div>

      {/* Aside Section (Pricing Summary) */}
      <aside className="w-full lg:w-[360px] md:w-[360px] lg:h-[445px] lg:mt-22 lg:ml-0 lg:-mr-2 max-w-md mb-10 bg-white rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.3)] self-start">
        <div className="mb-6">
          <span className="text-4xl font-extrabold">$100</span>
          <span className="text-sm font-normal"> (Inclusive of All Taxes)</span>
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

      {/* Pop-up Menu */}
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-s flex justify-center items-center z-10">
          <div className="bg-[white] w-[320px] md:w-[431px] lg:w-[431px] h-[420px] rounded-2xl shadow-xl flex flex-col justify-center items-center p-8">
            <img
              className="mb-4"
              src="/icons/1.png"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center md:whitespace-nowrap lg:whitespace-nowrap">
              Your Booking has been Confirmed
            </h2>
            <p className="text-gray-700 text-center mb-6 text-[11px]">
              Thanks for booking trip. We will share you all the trip details in
              your registered email address.
            </p>
            <button
              onClick={goToTripDetails}
              className="bg-[#2F4832] hover:bg-[#2e3a2b] text-white font-normal rounded-lg px-8 py-3 mb-4 cursor-pointer w-[280px] md:w-[380px] lg:w-[380px]"
            >
              View Trip
            </button>
            <button
              onClick={goToHome}
              className="hover:bg-gray-200 text-[#2F4832] border font-normal rounded-lg px-8 py-3 cursor-pointer w-[280px] md:w-[380px] lg:w-[380px]"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
