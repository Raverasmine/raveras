"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { libreFranklin, poppins } from "@/app/fonts";

const cities = [
  { name: "Shaki", x: "35%", y: "80%" },
  { name: "Iseyin", x: "45%", y: "65%" },
];

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      id='projects'
      ref={ref}
      className=' bg-black text-white py-24 relative overflow-hidden'
    >
      <div className="absolute inset-0 bg-[url('/globe.jpg')] bg-cover bg-center opacity-30" />

      <div className='relative container mx-auto px-4 z-10'>
        <motion.div
          initial='hidden'
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className={`${libreFranklin.className} bg-white/5 backdrop-blur-md rounded-[50px] p-8 md:p-12 text-center`}
        >
          <motion.h2
            className={`${poppins.className} text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight text-center`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.6 },
              },
            }}
          >
            Our Projects
          </motion.h2>

          <motion.p
            className='text-white/90 text-lg max-w-6xl mx-auto mb-12 leading-relaxed'
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.6 },
              },
            }}
          >
            West Africa is home to some of the world’s fastest-growing economies
            and has established itself as a globally-renowned mining hub.
          </motion.p>

          <motion.p
            className='text-white/90 text-lg max-w-6xl mx-auto mb-12 leading-relaxed'
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.6 },
              },
            }}
          >
            Despite a historical focus on gold, the region holds significant
            potential for rare earth metals such as lithium, tin, and tantalite,
            and remains largely underexplored. West Africa offers favorable
            mining investment frameworks, established resource and commodity
            markets, and excellent international connectivity due to its
            proximity to the Atlantic Ocean.
          </motion.p>

          <motion.p
            className='text-white/90 text-lg max-w-6xl mx-auto mb-12 leading-relaxed'
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.6 },
              },
            }}
          >
            Raveras Mines hopes to unlock West Africa as a key player in the
            global market of sustainably sourced rare earth minerals, delivering
            long-term, life-changing benefits within the communities it operates
            in.
          </motion.p>
        </motion.div>

        <div className='mt-16 relative h-[200px]'>
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 1 + index * 0.2, duration: 0.5 },
                },
              }}
              className='absolute'
              style={{ left: city.x, top: city.y }}
            >
              <div className='relative'>
                <div className='w-3 h-3 bg-white rounded-full animate-ping absolute' />
                <div className='w-3 h-3 bg-white rounded-full relative z-10' />
              </div>
              <motion.p
                className={`${poppins.className} text-white text-sm mt-2 whitespace-nowrap`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.2, duration: 0.3 }}
              >
                {city.name}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-16'>
          <motion.div
            initial='hidden'
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className={`${libreFranklin.className} bg-white/5 backdrop-blur-md rounded-[50px] p-8 md:p-12 `}
          >
            <motion.h2
              className={`${poppins.className} text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight text-center`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.6 },
                },
              }}
            >
              Shaki
            </motion.h2>
            <motion.p
              className='text-white/90 text-lg max-w-2xl mx-auto mb-8 leading-relaxed'
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.6 },
                },
              }}
            >
              Located in the northern part of Oyo state, Nigeria. It’s an area
              with significant potential for mining, Shaki has resources such as
              limestone, granite, and marble. The development of these mineral
              resources presents opportunities for economic growth by creating
              jobs and improving infrastructure.The Shaki Project is a
              relatively low-cost spodumene venture with an estimated annual
              production target of 50,000 metric tons of spodumene ore.
            </motion.p>

            <motion.p
              className='text-white/90 text-lg max-w-2xl mx-auto mb-8 leading-relaxed'
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.6 },
                },
              }}
            >
              In June 2023, the Company released its Definitive Feasibility
              Study (DFS) for the Shaki Project, confirming its economic
              viability and potential profitability with a planned production of
              3.6 million tons of spodumene concentrate over a 12-year Life of
              Mine (LOM).
            </motion.p>
          </motion.div>

          <motion.div
            initial='hidden'
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className={`${libreFranklin.className} bg-white/5 backdrop-blur-md rounded-[50px] p-8 md:p-12 `}
          >
            <motion.h2
              className={`${poppins.className} text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight text-center`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.6 },
                },
              }}
            >
              Iseyin
            </motion.h2>
            <motion.p
              className='text-white/90 text-lg max-w-2xl mx-auto mb-8 leading-relaxed'
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.6 },
                },
              }}
            >
              Iseyin, located in southwestern Oyo State, Nigeria, approximately
              60 km from Ibadan, is renowned for its traditional weaving
              industry and agricultural activities. The town is also gaining
              attention for its mineral resources, particularly deposits of
              limestone, granite, feldspar and more recently lithium.
            </motion.p>

            <motion.p
              className='text-white/90 text-lg max-w-2xl mx-auto mb-8 leading-relaxed'
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.6 },
                },
              }}
            >
              The Company holds a mining lease for 50 cadastral units, covering
              an area of 10 km² for lithium and associated minerals. This area
              includes highly prospective fractionated granitic intrusive
              centers with occurrences of lithium, columbite-tantalum, and
              outcropping pegmatites. Geological mapping and exploration
              drilling are ongoing, with preliminary feasibility studies
              expected to be completed by Q4 2024.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
