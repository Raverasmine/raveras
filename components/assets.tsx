"use client";

import dynamic from "next/dynamic";

import { motion } from "framer-motion";
import { poppins } from "@/app/fonts";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
const InteractiveMap = dynamic(() => import("@/components/interactiveMap"), {
  ssr: false,
});

const Assets = () => {
  const assets = [
    {
      name: "Spodumene",
      imageUrl: "/ore.jpg",
    },
    {
      name: "Zircon Sand",
      imageUrl: "/sand.avif",
    },
    // {
    //   name: "Gold",
    //   imageUrl: "/gold.webp",
    // },
    {
      name: "Tin",
      imageUrl: "/tin.jpg",
    },
  ];

  return (
    <section id='assets' className='bg-black text-white pt-24'>
      <motion.h2
        className={`${poppins.className} text-4xl md:text-5xl font-bold text-[#f6bd41] mb-8 tracking-tight text-center`}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.6 },
          },
        }}
      >
        Our Assets
      </motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-16 container mx-auto px-8 py-32 max-w-6xl'>
        {assets.map(({ imageUrl, name }, index) => (
          <Card
            key={index}
            className='bg-muted/60  flex flex-col  overflow-hidden group/hoverimg border-[#f6bd41]'
          >
            <CardHeader className='p-0 gap-0 space-y-0'>
              <div className='h-full overflow-hidden'>
                <Image
                  src={imageUrl}
                  alt={name}
                  width={300}
                  height={300}
                  className='w-full aspect-square object-fit transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]'
                />
              </div>
              <CardTitle className='py-6 pb-4 px-6 bg-white text-[#f6bd41] capitalize'>
                {name}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div>
        <InteractiveMap />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2  mx-auto px-4  gap-8 py-24 max-w-6xl'>
        <Card className='bg-zinc-900 p-6 border-yellow-400/20'>
          <h3 className='text-yellow-400 text-lg font-semibold mb-2'>
            Ibadan Facility
          </h3>
          <p className='text-zinc-300'>Processing of Spodumene</p>
        </Card>

        <Card className='bg-zinc-900 p-6 border-yellow-400/20'>
          <h3 className='text-yellow-400 text-lg font-semibold mb-2'>
            Jos Facility
          </h3>
          <p className='text-zinc-300'>Processing Tin and, Zircon.</p>
        </Card>

        {/* <Card className='bg-zinc-900 p-6 border-yellow-400/20'>
          <h3 className='text-yellow-400 text-lg font-semibold mb-2'>
            Udegi Facility
          </h3>
          <p className='text-zinc-300'>
            Processing Tin, Columbite, Tantalite, Zircon, Monazite
          </p>
        </Card> */}
      </div>
    </section>
  );
};

export default Assets;
