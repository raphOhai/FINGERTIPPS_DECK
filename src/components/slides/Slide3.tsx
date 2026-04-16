import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";

const Slide3 = () => (
  <SlideContent>
    <motion.h2 variants={staggerItem} className="text-5xl md:text-7xl font-bold text-foreground text-center">
      The Solution
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl w-full">
      {["Fast", "Simple", "Beautiful"].map((word) => (
        <div key={word} className="flex flex-col items-center gap-3">
          <span className="text-4xl font-black text-primary">{word}</span>
          <span className="text-muted-foreground text-center">Placeholder description for this key point.</span>
        </div>
      ))}
    </motion.div>
  </SlideContent>
);

export default Slide3;
