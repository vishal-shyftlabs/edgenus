"use client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LookingOut from "./components/LookingOut";
import Modules from "./components/Modules";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header showModules />
      <Hero />
      <Modules />
      <LookingOut />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
