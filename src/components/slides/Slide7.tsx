import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import SlideContent, { staggerItem } from "../SlideContent";

const competitors = [
  { name: "Shopify", focus: "Store builder only" },
  { name: "WhatsApp", focus: "Communication only" },
  { name: "Excel", focus: "Tracking only" },
  { name: "Mailchimp", focus: "Marketing only" },
];

const differentiators = [
  "Built for social commerce sellers",
  "AI-powered operations",
  "Automated workflows",
  "Designed for emerging markets",
  "Extremely affordable",
];

const Slide7 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-4">
      Differentiation
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground text-center leading-[1.05]">
      One Platform vs. <span className="text-muted-foreground">Many Tools</span>
    </motion.h2>
    <motion.p variants={staggerItem} className="mt-4 text-base sm:text-lg text-muted-foreground text-center max-w-2xl">
      Most platforms solve one problem. Fingertipps combines everything into one AI-powered system.
    </motion.p>

    <motion.div variants={staggerItem} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl w-full">
      <div className="bg-secondary/30 rounded-2xl p-5 sm:p-6 border border-border">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Others solve one thing</p>
        <div className="flex flex-col gap-2.5">
          {competitors.map((c) => (
            <div key={c.name} className="flex items-center gap-3 bg-background/40 rounded-lg p-3 border border-border/50">
              <span className="w-7 h-7 rounded-md bg-destructive/15 flex items-center justify-center flex-shrink-0">
                <X className="w-4 h-4 text-destructive" />
              </span>
              <div className="flex-1 flex justify-between items-center">
                <span className="text-sm font-semibold text-foreground">{c.name}</span>
                <span className="text-xs text-muted-foreground">{c.focus}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl p-5 sm:p-6 border border-primary/40">
        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Fingertipps does it all</p>
        <div className="flex flex-col gap-2.5">
          {differentiators.map((d) => (
            <div key={d} className="flex items-center gap-3 bg-background/30 rounded-lg p-3 border border-primary/20">
              <span className="w-7 h-7 rounded-md bg-primary/25 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </span>
              <span className="text-sm font-medium text-foreground">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </SlideContent>
);

export default Slide7;
