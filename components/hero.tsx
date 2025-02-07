"use client";

import { useEffect, useState } from "react";
import { libreFranklin, jetbrainsMono } from "@/app/fonts";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return; // ✅ Prevent SSR issues

    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className='relative h-screen overflow-hidden'>
      {/* Video Background */}
      <video
        className='absolute inset-0 w-full h-full object-cover transition-transform duration-300'
        style={{ transform: `translateY(${offset * 0.5}px)` }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src='/raveras-bg.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-transparent' />
      <div className='relative container mx-auto px-4 h-full flex flex-col justify-center'>
        <div className='max-w-3xl space-y-6'>
          <h1
            className={`${libreFranklin.className} text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight animate-fade-up`}
          >
            Raveras Mines
          </h1>
          <p
            className={`${libreFranklin.className} text-lg md:text-xl text-white/80 max-w-xl animate-fade-up animation-delay-100`}
          >
            Raveras Mines is a leading mining company committed to the
            responsible and sustainable extraction of rare earth minerals in
            West Africa. With advanced technology and strong environmental,
            social, and governance practices, Raveras unlocks the region’s
            mineral potential while creating lasting economic benefits for local
            communities.
          </p>
          <Button
            className={`${jetbrainsMono.className} bg-white text-[#f6bd41] hover:bg-white/90 transition-colors animate-fade-up animation-delay-200`}
            size='lg'
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
