import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";

const Slide16 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
      The Ask
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl md:text-6xl font-bold text-foreground text-center">
      Investment Opportunity
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-10 bg-primary/10 rounded-2xl p-8 border border-primary/30 text-center max-w-md">
      <p className="text-5xl md:text-6xl font-black text-primary">$250K</p>
      <p className="text-lg text-foreground font-semibold mt-2">For 10% Ownership</p>
    </motion.div>
    <motion.div variants={staggerItem} className="mt-8 flex gap-6 max-w-3xl">
      <div className="bg-secondary/50 rounded-xl p-6 border border-border text-center flex-1">
        <p className="text-3xl font-bold text-foreground">50,000+</p>
        <p className="text-sm text-muted-foreground mt-1">Users (24-Month Projection)</p>
      </div>
      <div className="bg-secondary/50 rounded-xl p-6 border border-border text-center flex-1">
        <p className="text-3xl font-bold text-foreground">$1M+</p>
        <p className="text-sm text-muted-foreground mt-1">Revenue (24-Month Projection)</p>
      </div>
    </motion.div>
    <motion.p variants={staggerItem} className="mt-6 text-base text-muted-foreground text-center max-w-2xl">
      Goal: Scale Fingertipps to serve 50,000+ businesses within 24 months.
    </motion.p>
  </SlideContent>
);

export default Slide16;
