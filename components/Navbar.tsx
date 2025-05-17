"use client";
import React from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "#" },
  { label: "Experiences", href: "#" },
  { label: "🔥 Hot Deals", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
];

const NavigationLinks: React.FC<{ className?: string }> = ({ className }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [nestedDropdownOpen, setNestedDropdownOpen] = React.useState(false);
  let dropdownTimeout: NodeJS.Timeout | null = null;
  let nestedDropdownTimeout: NodeJS.Timeout | null = null;

  React.useEffect(() => {
    if (!dropdownOpen) return;
    const handler = () => setDropdownOpen(false);
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [dropdownOpen]);

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setDropdownOpen(false);
      setNestedDropdownOpen(false);
    }, 150);
  };

  const handleNestedMouseEnter = () => {
    if (nestedDropdownTimeout) {
      clearTimeout(nestedDropdownTimeout);
    }
    setNestedDropdownOpen(true);
  };

  const handleNestedMouseLeave = () => {
    nestedDropdownTimeout = setTimeout(() => {
      setNestedDropdownOpen(false);
    }, 150);
  };

  return (
    <div className={`flex gap-8 items-center ${className || ""}`}>
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href="/"
          className="text-base leading-7 text-black hover:text-yellow-400 transition-colors cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setDropdownOpen((v) => !v);
          }}
        >
          Home
        </Link>
        {/* Dropdown */}
        <div
          className={`absolute text-center -left-20 md:left-0 lg:left-0 top-full mt-2 min-w-[220px] bg-white rounded-xl shadow-lg border border-gray-100 z-50 ${
            dropdownOpen ? "block" : "hidden"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Best Holiday Places with nested dropdown */}
          <div
            className="relative group flex items-center"
            onMouseEnter={handleNestedMouseEnter}
            onMouseLeave={handleNestedMouseLeave}
          >
            <Link
              href="best-holiday-places"
              className="flex-1 text-center block px-5 py-3 text-black hover:bg-yellow-100 rounded-t-xl transition-colors"
              onClick={() => {
                setDropdownOpen(false);
                setNestedDropdownOpen(false);
              }}
            >
              Best Holiday Places
            </Link>
            <button
              className="flex items-center px-0 py-3 focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setNestedDropdownOpen((v) => !v);
              }}
              tabIndex={-1}
              aria-label="Show sub menu"
              type="button"
            ></button>
            {/* Nested Dropdown */}
            <div
              className={`absolute left-full top-0 ml-1 min-w-[200px] bg-white rounded-xl shadow-lg border border-gray-100 z-50 ${
                nestedDropdownOpen ? "block" : "hidden"
              }`}
            >
              <Link
                href="/best-holiday-places/romantic-maldives"
                className="block px-5 py-3 text-black hover:bg-yellow-100 rounded-t-xl transition-colors"
                onClick={() => {
                  setDropdownOpen(false);
                  setNestedDropdownOpen(false);
                }}
              >
                Romantic Maldives
              </Link>
            </div>
          </div>
          {/* Most Visited Places */}
          <Link
            href="most-visited-places"
            className="block px-5 py-3 text-black hover:bg-yellow-100 rounded-b-xl transition-colors"
            onClick={() => setDropdownOpen(false)}
          >
            Most Visited Places
          </Link>
        </div>
      </div>
      {/* Other nav links */}
      {NAV_LINKS.filter((link) => link.label !== "Home").map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-base leading-7 text-black hover:text-yellow-400 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

const AuthButtons: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex gap-4 items-center ${className || ""}`}>
    <button className="text-base leading-7 text-yellow-400 rounded-xl border border-yellow-400 h-[44px] w-[90px] hover:bg-yellow-400 hover:text-white transition-colors cursor-pointer">
      Signup
    </button>
    <button className="text-base leading-7 text-white bg-yellow-400 rounded-xl h-[44px] w-[90px] hover:bg-yellow-500 transition-colors cursor-pointer  ">
      Login
    </button>
  </div>
);

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [showHomeDropdown, setShowHomeDropdown] = React.useState(false);
  const [showBestPlacesNested, setShowBestPlacesNested] = React.useState(false);

  if (!isOpen) return null;

  const toggleHomeDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowHomeDropdown(!showHomeDropdown);
  };

  const toggleBestPlacesNested = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent closing the main dropdown
    setShowBestPlacesNested(!showBestPlacesNested);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 lg:hidden">
      <div className="flex flex-col p-5 h-full relative">
        <div className="relative w-full h-[50px] mb-2">
          <img
            className="absolute w-[61px] h-[50px] top-0 left-1/2 -translate-x-1/2 object-cover"
            alt="Ni exp JPEG"
            src="/images/NI Exp JPEG 2.webp"
          />
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex w-10 h-10 items-center justify-center p-0 absolute top-5 left-5 bg-[#ffca01] rounded-[10px]"
          aria-label="Close menu"
        >
          <span className="text-2xl text-black">&times;</span>
        </button>
        <div className="flex flex-col items-start gap-6 mt-16 w-full">
          {/* Home with Dropdown */}
          <div className="w-full">
            <button
              onClick={toggleHomeDropdown}
              className="flex justify-between items-center w-full text-base leading-7 text-black hover:text-yellow-400 transition-colors cursor-pointer"
              aria-expanded={showHomeDropdown}
              aria-controls="home-dropdown-mobile"
            >
              Home
              <svg
                className={`w-5 h-5 transition-transform ${
                  showHomeDropdown ? "rotate-90" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* Home Dropdown */}
            <div
              id="home-dropdown-mobile"
              className={`mt-2 py-2 pl-4 border-l border-gray-200 ${
                showHomeDropdown ? "block" : "hidden"
              }`}
            >
              {/* Best Holiday Places with Nested Dropdown */}
              <div className="w-full">
                <button
                  onClick={toggleBestPlacesNested}
                  className="flex justify-between items-center w-full text-base leading-7 text-black hover:text-yellow-400 transition-colors cursor-pointer pl-2"
                  aria-expanded={showBestPlacesNested}
                  aria-controls="best-places-nested-mobile"
                >
                  Best Holiday Places
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      showBestPlacesNested ? "rotate-90" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* Nested Best Holiday Places */}
                <div
                  id="best-places-nested-mobile"
                  className={`mt-2 py-2 pl-6 border-l border-gray-200 ${
                    showBestPlacesNested ? "block" : "hidden"
                  }`}
                >
                  <Link
                    href="/best-holiday-places/romantic-maldives"
                    className="block py-2 text-base leading-7 text-black hover:text-yellow-400 transition-colors"
                    onClick={onClose}
                  >
                    Romantic Maldives
                  </Link>
                </div>
              </div>
              {/* Most Visited Places */}
              <Link
                href="most-visited-places"
                className="block py-2 pl-2 text-base leading-7 text-black hover:text-yellow-400 transition-colors"
                onClick={onClose}
              >
                Most Visited Places
              </Link>
            </div>
          </div>

          {/* Other Nav Links (without dropdowns for simplicity on mobile) */}
          {NAV_LINKS.filter((link) => link.label !== "Home").map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block w-full text-base leading-7 text-black hover:text-yellow-400 transition-colors"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-8 w-full">
            <AuthButtons className="flex-col items-center w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileHeader: React.FC<{ onMenuClick: () => void }> = ({
  onMenuClick,
}) => (
  <div className="lg:hidden relative w-full h-[70px]">
    <div className="relative w-full h-[70px] bg-white">
      <button
        type="button"
        className="flex w-10 h-10 items-center justify-center p-0 absolute top-5 left-5 bg-[#ffca01] rounded-[10px]"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <img src="/icons/hamburger.webp" alt="Open menu" className="w-5 h-5" />
      </button>
      <img
        className="absolute w-[61px] h-[50px] top-2 left-1/2 -translate-x-1/2 object-cover"
        alt="Ni exp JPEG"
        src="/images/NI Exp JPEG 2.webp"
      />
    </div>
  </div>
);

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden lg:flex items-center w-full max-w-[1440px] mx-auto">
        <nav className="flex justify-between items-center px-24 w-full h-[80px]">
          <img
            src="/images/logo.webp"
            alt="NI Experiences Logo"
            className="w-[70px] h-[54px] object-cover"
          />
          <NavigationLinks />
          <AuthButtons />
        </nav>
      </header>

      {/* Mobile/Tablet Header */}
      <MobileHeader onMenuClick={() => setIsMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
