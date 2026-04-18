import { motion } from "framer-motion";
import { Rocket, ShoppingCart, Zap, TrendingUp } from "lucide-react";
import SlideContent, { staggerItem } from "../SlideContent";

const pillars = [
  { word: "Launch", icon: Rocket, desc: "Go live in minutes" },
  { word: "Sell", icon: ShoppingCart, desc: "Accept payments anywhere" },
  { word: "Automate", icon: Zap, desc: "AI handles operations" },
  { word: "Grow", icon: TrendingUp, desc: "Scale effortlessly" },
];

const Slide4 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-4">
      What is Fingertipps?
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground text-center max-w-4xl leading-[1.05]">
      AI-Powered <span className="text-primary">Commerce System</span>
    </motion.h2>
    <motion.p variants={staggerItem} className="mt-6 text-base sm:text-xl text-muted-foreground max-w-3xl text-center leading-relaxed">
      Fingertipps helps small businesses{" "}
      <span className="text-primary font-semibold">launch</span>,{" "}
      <span className="text-primary font-semibold">automate</span>, and{" "}
      <span className="text-primary font-semibold">scale</span> from one dashboard.
    </motion.p>

    <motion.div variants={staggerItem} className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl w-full">
      {pillars.map(({ word, icon: Icon, desc }) => (
        <div key={word} className="bg-secondary/40 rounded-2xl p-5 border border-border hover:border-primary/40 transition-colors text-center">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-3">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-foreground">{word}</h3>
          <p className="text-xs text-muted-foreground mt-1">{desc}</p>
        </div>
      ))}
    </motion.div>
  </SlideContent>
);

export default Slide4;
