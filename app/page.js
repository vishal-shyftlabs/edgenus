"use client";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LookingOut from "./components/LookingOut";
import Modules from "./components/Modules";
import WhyChooseUs from "./components/WhyChooseUs";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
      <Header showModules />
      <Hero />
      <Modules />
      <div className="sm:h-[100vh] md:px-20 px-8 pb-20 pt-10" id="portfolio">
        <div className="text-center mb-10">
          <div className="text-24 md:text-32 font-semibold">Our Portfolio</div>
          <div className="text-22 md:text-24 font-medium">
            Clients we have worked with
          </div>
        </div>
        <Carousel />
      </div>
      <LookingOut />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
