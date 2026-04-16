import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";

const Slide4 = () => (
  <SlideContent>
    <motion.h2 variants={staggerItem} className="text-5xl md:text-7xl font-bold text-foreground text-center">
      Key Metric
    </motion.h2>
    <motion.p variants={staggerItem} className="mt-6 text-9xl font-black text-primary">
      42%
    </motion.p>
    <motion.p variants={staggerItem} className="mt-4 text-xl text-muted-foreground">
      improvement over baseline
    </motion.p>
  </SlideContent>
);

export default Slide4;
