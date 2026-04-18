import { motion } from "framer-motion";
import { TrendingUp, Smartphone, Globe2, Sparkles } from "lucide-react";
import SlideContent, { staggerItem } from "../SlideContent";

const stats = [
  { metric: "41M+", label: "Small businesses in Nigeria", icon: Globe2 },
  { metric: "Millions", label: "Social commerce sellers", icon: Smartphone },
  { metric: "Rapid", label: "Digital payment adoption", icon: TrendingUp },
];

const gaps = ["E-commerce infrastructure", "Automation tools", "Marketing systems", "AI assistance"];

const Slide3 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-4">
      The Opportunity
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground text-center leading-[1.05] max-w-4xl">
      Africa's Untapped <span className="text-primary">Commerce Market</span>
    </motion.h2>

    <motion.div variants={staggerItem} className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl w-full">
      {stats.map(({ metric, label, icon: Icon }) => (
        <div key={label} className="bg-gradient-to-br from-secondary/60 to-secondary/30 rounded-2xl p-5 border border-border relative overflow-hidden">
          <Icon className="absolute -top-2 -right-2 w-20 h-20 text-primary/10" />
          <p className="text-3xl sm:text-4xl font-black text-primary relative">{metric}</p>
          <p className="text-sm text-muted-foreground mt-2 relative">{label}</p>
        </div>
      ))}
    </motion.div>

    <motion.div variants={staggerItem} className="mt-8 max-w-4xl w-full bg-secondary/30 rounded-2xl p-5 sm:p-6 border border-border">
      <p className="text-xs font-bold text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
        <Sparkles className="w-4 h-4" /> But most businesses lack
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {gaps.map((g) => (
          <div key={g} className="bg-background/40 rounded-lg p-3 border border-border/50 text-center">
            <span className="text-xs sm:text-sm text-foreground font-medium">{g}</span>
          </div>
        ))}
      </div>
    </motion.div>

    <motion.p variants={staggerItem} className="mt-6 text-base sm:text-lg font-semibold text-primary text-center">
      A massive gap in business infrastructure.
    </motion.p>
  </SlideContent>
);

export default Slide3;
