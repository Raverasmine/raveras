"use client";

import { useEffect } from "react";

import Hero from "@/components/hero";
import ScrollToTop from "@/components/scrollToTop";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import About from "@/components/about";
import Projects from "@/components/projects";
import Sustainability from "@/components/sustainability";
import Assets from "@/components/assets";
import Contact from "@/components/contact";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Navbar />
      <main className='overflow-hidden'>
        <Hero />
        <About />
        <Projects />
        <Sustainability />
        <Assets />
        <Contact />
        <ScrollToTop />
        <Footer />
      </main>
    </>
  );
}
