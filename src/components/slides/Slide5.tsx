import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";

const Slide5 = () => (
  <SlideContent>
    <motion.h2 variants={staggerItem} className="text-5xl md:text-7xl font-bold text-foreground text-center">
      Thank You
    </motion.h2>
    <motion.p variants={staggerItem} className="mt-8 text-xl text-muted-foreground">
      Questions?
    </motion.p>
  </SlideContent>
);

export default Slide5;
