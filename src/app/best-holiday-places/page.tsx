import Breadcrumbs from "../../../components/best holiday places/Breadcrumbs";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Searchbar from "../../../components/best holiday places/Searchbar"; // Renamed
import DestinationSearch from "../../../components/best holiday places/DestinationSearch";
import Pagination from "../../../components/best holiday places/Pagination";

export default function BestHolidayPlacesPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <div className="mt-[50px] w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Centering container */}
        <div className="flex lg:gap-8"> {/* Adjust gap for larger screens */}
          <div className="w-full lg:w-1/4"> {/* Sidebar takes 1/4 width on larger screens */}
            <Searchbar /> {/* Visible on all screens now (we'll adjust SideFilter) */}
          </div>
          <div className="flex-1">
            <DestinationSearch />
          </div>
        </div>
        <Pagination />
      </div>
      <Footer />
    </>
  );
}