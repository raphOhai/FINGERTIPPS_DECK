import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";
import growthImg from "@/assets/growth-visual.jpg";

const Slide5 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
      Traction
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-5xl md:text-7xl font-bold text-foreground text-center">
      Built for Scale
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-12 flex flex-col md:flex-row items-center gap-12 max-w-5xl w-full">
      <div className="flex flex-col gap-8">
        {[
          { metric: "10x", label: "Faster store launch vs. traditional platforms" },
          { metric: "60%", label: "Reduction in manual operations" },
          { metric: "3.2x", label: "Average revenue growth in first 6 months" },
        ].map((item) => (
          <div key={item.metric} className="flex items-baseline gap-4">
            <span className="text-5xl md:text-6xl font-black text-primary">{item.metric}</span>
            <span className="text-lg text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>
      <img src={growthImg} alt="Growth trajectory" loading="lazy" className="w-72 h-72 rounded-2xl object-cover opacity-90" />
    </motion.div>
  </SlideContent>
);

export default Slide5;
