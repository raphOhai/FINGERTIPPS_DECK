import { motion } from "framer-motion";
import { Users, TrendingUp } from "lucide-react";
import SlideContent, { staggerItem } from "../SlideContent";

const Slide16 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-4">
      The Ask
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground text-center leading-[1.05]">
      Investment <span className="text-primary">Opportunity</span>
    </motion.h2>

    <motion.div variants={staggerItem} className="mt-10 bg-gradient-to-br from-primary/25 to-primary/5 rounded-3xl p-8 sm:p-10 border border-primary/40 text-center max-w-md w-full shadow-2xl shadow-primary/10">
      <p className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-3">Raising</p>
      <p className="text-6xl sm:text-7xl font-black text-primary leading-none">$250K</p>
      <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40">
        <p className="text-sm sm:text-base text-foreground font-bold">For 10% Ownership</p>
      </div>
    </motion.div>

    <motion.div variants={staggerItem} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl w-full">
      <div className="bg-secondary/40 rounded-2xl p-5 sm:p-6 border border-border flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
          <Users className="w-6 h-6 text-primary" />
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-black text-foreground">50,000+</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Users (24-month projection)</p>
        </div>
      </div>
      <div className="bg-secondary/40 rounded-2xl p-5 sm:p-6 border border-border flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
          <TrendingUp className="w-6 h-6 text-primary" />
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-black text-foreground">$1M+</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Revenue (24-month projection)</p>
        </div>
      </div>
    </motion.div>

    <motion.p variants={staggerItem} className="mt-6 text-base text-muted-foreground text-center max-w-2xl">
      Goal: Scale Fingertipps to serve <span className="text-primary font-semibold">50,000+ businesses</span> within 24 months.
    </motion.p>
  </SlideContent>
);

export default Slide16;
