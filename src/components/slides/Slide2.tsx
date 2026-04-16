import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";

const Slide2 = () => (
  <SlideContent>
    <motion.h2 variants={staggerItem} className="text-5xl md:text-7xl font-bold text-foreground text-center">
      The Problem
    </motion.h2>
    <motion.p variants={staggerItem} className="mt-8 text-xl text-muted-foreground max-w-2xl text-center leading-relaxed">
      Describe the challenge your audience faces. Keep it concise and let the negative space do the talking.
    </motion.p>
  </SlideContent>
);

export default Slide2;
