import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";
import logo from "@/assets/fingertipps-logo.png";

const Slide1 = () => (
  <SlideContent>
    <motion.img
      variants={staggerItem}
      src={logo}
      alt="Fingertipps logo"
      width={160}
      height={160}
      className="mb-8"
    />
    <motion.h1 variants={staggerItem} className="text-6xl md:text-8xl font-black text-foreground leading-tight text-center">
      Fingertipps
    </motion.h1>
    <motion.p variants={staggerItem} className="mt-6 text-2xl text-primary font-semibold tracking-wide text-center">
      AI-Powered Commerce at Your Fingertips
    </motion.p>
    <motion.p variants={staggerItem} className="mt-4 text-lg text-muted-foreground max-w-2xl text-center">
      Launch, automate, and scale your business — all from one dashboard.
    </motion.p>
  </SlideContent>
);

export default Slide1;
