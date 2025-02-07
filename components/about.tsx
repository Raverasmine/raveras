"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target } from "lucide-react";

const statements = [
  {
    icon: Eye,
    title: "OUR VISION",
    description:
      "To establish ourselves as a key player in the responsible and sustainable supply of rare earth elements using the most innovative technologies with Advanced Environmental, Social and Governance practices and systems.",
  },
  {
    icon: Target,
    title: "OUR MISSION",
    description:
      "To be the catalyst for sustainable growth in Africa's mining sector, fostering innovation and responsible practices. We are committed to enhancing local skills, supporting infrastructure, and creating lasting value for communities. Through partnerships and integrity, we aim to drive economic prosperity and improve quality of life across the continent.",
  },
];

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id='about' ref={ref} className='py-24 bg-white px-4'>
      <div className='container mx-auto px-4 space-y-32'>
        <div className='flex flex-col lg:flex-row gap-16 items-start'>
          <div className='lg:w-1/2 space-y-6'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-center mb-12 text-3xl md:text-4xl font-bold text-[#f6bd41] leading-tight transition-all duration-700 delay-100'
            >
              About Us
            </motion.h2>
            <p
              className={cn(
                "text-gray-600 leading-relaxed transition-all duration-700 delay-200",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Raveras Mines is a forward-thinking mining company dedicated to
              the responsible exploration, extraction, and processing of rare
              earth minerals in West Africa. With a focus on sustainability,
              innovation, and community impact, we aim to unlock the region’s
              vast mineral potential while adhering to the highest environmental
              and ethical standards.
            </p>
            <p
              className={cn(
                "text-gray-600 leading-relaxed transition-all duration-700 delay-200",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Our operations are strategically positioned in mineral-rich
              regions of Nigeria, where we mine and process critical resources
              such as lithium, tin, tantalite, and other valuable minerals.
              Through cutting-edge technology and sustainable practices, we
              ensure that our mining activities create lasting value for local
              communities, foster economic growth, and contribute to global
              advancements in clean energy and technology.
            </p>
            <p
              className={cn(
                "text-gray-600 leading-relaxed transition-all duration-700 delay-200",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              At Raveras Mines, we are more than a mining company—we are a
              catalyst for Africa’s industrial transformation. By prioritizing
              responsible resource management, environmental protection, and
              local skill development, we are paving the way for a sustainable
              and prosperous future.
            </p>
          </div>
          <div className='lg:w-1/2 space-y-8'>
            <div className='grid grid-cols-1 gap-8'>
              {statements.map((statement, index) => (
                <motion.div
                  key={statement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className='h-full'>
                    <CardContent className='p-6 flex flex-col items-center text-center'>
                      <statement.icon size={48} className='text-black mb-4' />
                      <h3 className='text-xl font-semibold text-[#f6bd41] mb-2'>
                        {statement.title}
                      </h3>
                      <p className='text-gray-600'>{statement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={cn(
            "relative h-96 rounded-2xl overflow-hidden transition-all duration-700 delay-700 max-w-screen-lg mx-auto",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Image
            src='/trucks.png'
            alt='Tractor'
            fill
            className='object-cover transition-transform duration-700 hover:scale-110'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
