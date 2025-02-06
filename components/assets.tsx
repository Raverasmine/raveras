"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { poppins } from "@/app/fonts";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const Assets = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const assets = [
    {
      name: "Spodumene",
      imageUrl: "/spodumene.webp",
    },
    {
      name: "Zircon Sand",
      imageUrl: "/zircon.webp",
    },
    {
      name: "Gold",
      imageUrl: "/gold.webp",
    },
    {
      name: "Tin",
      imageUrl: "/tin.webp",
    },
  ];

  return (
    <section id='assets' ref={ref} className='bg-black text-white py-24'>
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

      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 container mx-auto px-4 mt-32 max-w-3xl'>
        {assets.map(({ imageUrl, name }, index) => (
          <Card
            key={index}
            className='bg-muted/60  flex flex-col  overflow-hidden group/hoverimg border-[#f6bd41]'
          >
            <CardHeader className='p-0 gap-0 space-y-0'>
              <div className='h-full overflow-hidden'>
                <Image
                  src={imageUrl}
                  alt=''
                  width={300}
                  height={300}
                  className='w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]'
                />
              </div>
              <CardTitle className='py-6 pb-4 px-6 bg-white text-[#f6bd41] capitalize'>
                {name}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Assets;
