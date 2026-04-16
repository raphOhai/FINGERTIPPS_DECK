import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";

const competitors = [
  { name: "Shopify", focus: "Store builder" },
  { name: "WhatsApp", focus: "Communication" },
  { name: "Excel", focus: "Tracking" },
  { name: "Mailchimp", focus: "Marketing" },
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
    <motion.p variants={staggerItem} className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
      Differentiation
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl md:text-6xl font-bold text-foreground text-center">
      One Platform vs. Many Tools
    </motion.h2>
    <motion.p variants={staggerItem} className="mt-4 text-lg text-muted-foreground text-center max-w-2xl">
      Most platforms solve one problem. Fingertipps combines everything into one AI-powered system.
    </motion.p>
    <motion.div variants={staggerItem} className="mt-8 flex flex-col md:flex-row gap-8 max-w-4xl w-full">
      <div className="flex-1">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Others solve one thing</p>
        <div className="flex flex-col gap-2">
          {competitors.map((c) => (
            <div key={c.name} className="bg-secondary/30 rounded-lg p-3 border border-border flex justify-between items-center">
              <span className="text-sm font-medium text-foreground">{c.name}</span>
              <span className="text-xs text-muted-foreground">{c.focus}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">Fingertipps does it all</p>
        <div className="flex flex-col gap-2">
          {differentiators.map((d) => (
            <div key={d} className="bg-primary/10 rounded-lg p-3 border border-primary/30 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="text-sm text-foreground">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </SlideContent>
);

export default Slide7;
