"use client";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Modules from "./components/Modules";
import ReachOut from "./components/ReachOut";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Modules />
      <ReachOut />
      {/* <Footer/> */}
    </>
  );
}
