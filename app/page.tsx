"use client";

import { useEffect } from "react";
import type LocomotiveScroll from "locomotive-scroll";

import Hero from "@/components/hero";
import ScrollToTop from "@/components/scrollToTop";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import About from "@/components/about";
import Projects from "@/components/projects";
import Sustainability from "@/components/sustainability";
import Assets from "@/components/assets";
import Contact from "@/components/contact";

export const dynamic = "force-dynamic";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let locomotiveScroll: LocomotiveScroll | null = null;

      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        locomotiveScroll = new LocomotiveScroll();
      })();

      return () => {
        if (locomotiveScroll) {
          locomotiveScroll.destroy(); // Cleanup
        }
      };
    }
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
