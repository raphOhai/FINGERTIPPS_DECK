import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";

const Slide15 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-5">
      The Team
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-5xl md:text-7xl font-black text-foreground text-center leading-tight">
      Built by an Operator
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-10 flex flex-col items-center gap-6 max-w-lg">
      <div className="w-28 h-28 rounded-full bg-primary/20 border-4 border-primary/40 flex items-center justify-center">
        <span className="text-4xl font-bold text-primary">EO</span>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground">Emmanuel Orilade</h3>
        <p className="text-primary font-semibold mt-1">Co-Founder & CEO</p>
      </div>
      <div className="flex flex-col gap-2 text-center">
        {[
          "Building commerce infrastructure",
          "Startup operations",
          "Product development",
        ].map((exp) => (
          <p key={exp} className="text-sm text-muted-foreground">{exp}</p>
        ))}
      </div>
      <div className="mt-4 bg-secondary/50 rounded-xl p-4 border border-border text-center">
        <p className="text-sm text-muted-foreground italic">
          Additional team members will be added as the team grows.
        </p>
      </div>
    </motion.div>
  </SlideContent>
);

export default Slide15;
