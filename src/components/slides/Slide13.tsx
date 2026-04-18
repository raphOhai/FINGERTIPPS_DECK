import { motion } from "framer-motion";
import { Sparkles, Bot, Store } from "lucide-react";
import SlideContent, { staggerItem } from "../SlideContent";

const items = [
  { icon: Sparkles, title: "AI Website Builder", desc: "Build a website by describing it in a chat interface", status: "Next" },
  { icon: Bot, title: "Lira AI Expansion", desc: "Advanced sales automation and customer support", status: "Q3" },
  { icon: Store, title: "Marketplace Integration", desc: "Discover and buy from Fingertipps merchants", status: "Q4" },
];

const Slide13 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-4">
      Product Roadmap
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground text-center leading-[1.05]">
      What's <span className="text-primary">Coming Next</span>
    </motion.h2>

    <motion.div variants={staggerItem} className="mt-10 flex flex-col gap-4 max-w-3xl w-full relative">
      <div className="absolute left-6 top-6 bottom-6 w-px bg-primary/30 hidden sm:block" />
      {items.map(({ icon: Icon, title, desc, status }, i) => (
        <div key={i} className="relative flex items-start gap-4 bg-secondary/40 rounded-2xl p-5 border border-border">
          <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0 z-10">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-lg font-bold text-foreground">{title}</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-primary/20 border border-primary/40 text-xs font-bold text-primary">
                {status}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1.5">{desc}</p>
          </div>
        </div>
      ))}
    </motion.div>
  </SlideContent>
);

export default Slide13;
