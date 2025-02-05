"use client";

import { useEffect } from "react";

import Hero from "@/components/hero";
import ScrollToTop from "@/components/scrollToTop";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div>
      <Hero />
      <ScrollToTop />
    </div>
  );
}
