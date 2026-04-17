import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";

const Slide1 = () => (
  <SlideContent>
    <motion.h1 variants={staggerItem} className="text-6xl md:text-8xl font-black text-foreground leading-tight text-center">
      Fingertipps
    </motion.h1>
    <motion.p variants={staggerItem} className="mt-4 text-xl md:text-2xl text-primary font-semibold tracking-wide text-center">
      AI-Powered Commerce Infrastructure for Small Businesses
    </motion.p>
    <motion.p variants={staggerItem} className="mt-3 text-lg text-muted-foreground text-center">
      Launch. Sell. Automate. Grow.
    </motion.p>
    <motion.div variants={staggerItem} className="mt-10 flex flex-col items-center gap-1 text-sm text-muted-foreground">
      <p><span className="text-foreground font-medium">Founder:</span> Emmanuel Orilade</p>
      <p>Lagos, Nigeria</p>
      <p className="text-primary font-medium">Fingertipps.com</p>
    </motion.div>
  </SlideContent>
);

export default Slide1;
