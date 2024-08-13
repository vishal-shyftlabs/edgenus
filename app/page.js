"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Modules from "./components/Modules";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Modules />
      <div
        id="customer"
        className="looking-out looking-out-properties text-white relative"
      />
      <WhyChooseUs />
    </>
  );
}
