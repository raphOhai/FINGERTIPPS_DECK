import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";
import logo from "@/assets/fingertipps-logo.png";

const Slide8 = () => (
  <SlideContent>
    <motion.img
      variants={staggerItem}
      src={logo}
      alt="Fingertipps logo"
      width={120}
      height={120}
      className="mb-6"
    />
    <motion.h2 variants={staggerItem} className="text-5xl md:text-7xl font-bold text-foreground text-center">
      Let's Build the Future of Commerce
    </motion.h2>
    <motion.p variants={staggerItem} className="mt-6 text-2xl text-primary font-semibold">
      Raising $5M Seed Round
    </motion.p>
    <motion.div variants={staggerItem} className="mt-10 flex flex-col items-center gap-3">
      <p className="text-lg text-muted-foreground">hello@fingertipps.com</p>
      <p className="text-lg text-muted-foreground">www.fingertipps.com</p>
    </motion.div>
  </SlideContent>
);

export default Slide8;
