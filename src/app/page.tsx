"use client";

import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import DealsAndExperiences from "../../components/Deals&Experiences";
import BestPlace from "../../components/BestPlace";
import ExploreTopLocations from "../../components/ExploreTopLocations";
import BestValueDeals from "../../components/BestValueDeals";
import Experiences from "../../components/Experiences";
import WhyChooseUs from "../../components/WhyChooseUs";
import RememberUs from "../../components/RememberUs";
import Customers from "../../components/Customers";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DealsAndExperiences />
      <BestPlace />
      <ExploreTopLocations />
      <BestValueDeals />
      <Experiences />
      <WhyChooseUs />
      <RememberUs />
      <Customers />
      <Footer />
    </div>
  );
}
