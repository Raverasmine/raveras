"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { poppins } from "@/app/fonts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const list = [
  {
    description:
      "Responsibly manage the extraction and processing of natural resources.",
  },
  {
    description:
      "Implement robust environmental management policies and procedures.",
  },
  {
    description:
      "Efficiently manage water resources and reduce unit production consumption through recycling.",
  },
  {
    description: "Comply with all relevant laws, regulations, and obligations.",
  },
  {
    description: "Improve energy efficiency and reduce our carbon footprint.",
  },
  {
    description: "Continually identify, monitor, review, and control risks.",
  },
];
const Sustainability = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id='sustainability' ref={ref} className='py-24 bg-white'>
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
        Sustainability
      </motion.h2>
      <p
        className={cn(
          "text-gray-600 leading-relaxed transition-all duration-700 delay-200 max-w-6xl text-center mx-auto mb-4",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        At Raveras Mines, our goal is to become a leading, low-cost, and
        sustainable producer of rare earth mineral products. With this ambition
        comes the responsibility to manage the extraction and processing of
        these essential raw materials sustainably. We are committed to
        minimizing the environmental and social impacts of our operations,
        ensuring alignment with the sustainable world we envision.
      </p>

      <p
        className={cn(
          "text-gray-600 leading-relaxed transition-all duration-700 delay-200 max-w-6xl text-center mx-auto",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        We recognize the environmental impact of our activities and strive to
        use resources efficiently to minimize this impact. To achieve our
        sustainability goals, we:
      </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mt-24 p-6'>
        {list.map(({ description }, index) => (
          <Card
            key={index}
            className='bg-muted/50  hover:bg-background transition-all delay-75 group/number'
          >
            <CardHeader>
              <div className='flex justify-between'>
                <span className='text-5xl text-muted-foreground/15 text-[#f6bd41] font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30'>
                  0{index + 1}
                </span>
              </div>
            </CardHeader>

            <CardContent className='text-muted-foreground font-bold'>
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Sustainability;
