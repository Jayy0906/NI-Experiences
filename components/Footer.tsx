import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2f4a39] text-white w-full max-w-[1440px] lg:max-w-[1540px] mx-auto overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-10 md:px-20 lg:px-28 xl:px-40 pt-10 pb-6">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Image
            alt="NI Experiences logo"
            className="lg:w-[120px] lg:h-[120px] w-[195px] h-[160px] object-contain"
            height={120}
            src="/images/footer-logo.webp"
            width={120}
            layout="intrinsic"
          />
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base font-normal">
          <a className="hover:underline" href="#">
            Home
          </a>
          <a className="hover:underline" href="#">
            Destinations
          </a>
          <a className="hover:underline" href="#">
            Events
          </a>
          <a className="hover:underline" href="#">
            Activities
          </a>
          <a className="hover:underline" href="#">
            About Us
          </a>
          <a className="hover:underline" href="#">
            Contact Us
          </a>
        </nav>

        {/* Contact Info */}
        <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-3 text-yellow-400 text-sm md:text-base lg:text-base font-normal">
          <div className="flex items-center space-x-2 transition-colors duration-200 cursor-pointer hover:text-white">
            <img src="/icons/calling.webp" alt="Phone" className="w-5 h-5" />
            <span>(620) 555-0127</span>
          </div>
          <div className="flex items-center space-x-2 transition-colors duration-200 cursor-pointer hover:text-white">
            <img src="/icons/gmail.webp" alt="Email" className="w-5 h-5" />
            <span>Niexp@example.com</span>
          </div>
          <div className="flex items-center space-x-2 transition-colors duration-200 cursor-pointer hover:text-white">
            <img src="/icons/location.webp" alt="Address" className="w-5 h-5" />
            <span>3891 Ranchview Dr. Richardson, California 62639</span>
          </div>
        </div>

        <hr className="border-t border-gray-600 mt-8" />

        {/* Copyright and Policy Links */}
        <div className="mt-6 flex flex-row items-center justify-between text-sm font-normal text-white gap-x-6 flex-wrap">
          <div>All Rights Reserved</div>
          <div className="flex flex-row items-center gap-x-1">
            <a className="hover:underline" href="#">
              Privacy Policy
            </a>
            <span>-</span>
            <a className="hover:underline" href="#">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
