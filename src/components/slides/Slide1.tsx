import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";

const Slide1 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm font-semibold tracking-widest uppercase text-primary mb-6">
      Welcome
    </motion.p>
    <motion.h1 variants={staggerItem} className="text-6xl md:text-8xl font-black text-foreground leading-tight text-center">
      Your Presentation
    </motion.h1>
    <motion.p variants={staggerItem} className="mt-8 text-xl text-muted-foreground max-w-2xl text-center">
      A minimal, dark slide deck built for impact.
    </motion.p>
  </SlideContent>
);

export default Slide1;
