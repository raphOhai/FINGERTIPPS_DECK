import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";
import africaImg from "@/assets/africa-opportunity.jpg";

const stats = [
  { metric: "41M+", label: "Small businesses in Nigeria" },
  { metric: "Millions", label: "Social commerce sellers" },
  { metric: "Rapid", label: "Digital payments adoption" },
];

const gaps = [
  "E-commerce infrastructure",
  "Automation tools",
  "Marketing systems",
  "AI assistance",
];

const Slide3 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
      The Opportunity
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl md:text-6xl font-bold text-foreground text-center">
      Africa's Untapped Commerce Market
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-8 flex flex-col md:flex-row items-center gap-10 max-w-5xl">
      <img src={africaImg} alt="Digital Africa" loading="lazy" className="w-64 h-64 rounded-2xl object-cover" />
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-wrap gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-secondary/50 rounded-xl p-4 border border-border flex-1 min-w-[140px]">
              <p className="text-3xl font-black text-primary">{s.metric}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">But most businesses lack:</p>
          <div className="grid grid-cols-2 gap-2">
            {gaps.map((g) => (
              <div key={g} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
    <motion.p variants={staggerItem} className="mt-6 text-lg font-semibold text-primary text-center">
      A massive gap in business infrastructure.
    </motion.p>
  </SlideContent>
);

export default Slide3;
