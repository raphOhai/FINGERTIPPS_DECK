import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";
import problemImg from "@/assets/problem-illustration.jpg";

const Slide2 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
      The Problem
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-5xl md:text-7xl font-bold text-foreground text-center">
      Commerce is Broken
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-10 flex flex-col md:flex-row items-center gap-12 max-w-5xl">
      <img src={problemImg} alt="Fragmented commerce tools" loading="lazy" className="w-72 h-72 rounded-2xl object-cover opacity-80" />
      <div className="flex flex-col gap-5 text-left">
        {[
          "Businesses juggle 6+ disconnected tools to run daily operations",
          "Manual processes eat up 20+ hours per week",
          "Scaling means more complexity, more cost, more chaos",
        ].map((text, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            <span className="text-lg text-muted-foreground leading-relaxed">{text}</span>
          </div>
        ))}
      </div>
    </motion.div>
  </SlideContent>
);

export default Slide2;
