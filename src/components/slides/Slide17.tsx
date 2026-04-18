import { motion } from "framer-motion";
import { Megaphone, Code2, UserPlus, Building } from "lucide-react";
import SlideContent, { staggerItem } from "../SlideContent";

const funds = [
  { pct: 40, label: "Marketing & Sales", desc: "Customer acquisition, retention & revenue growth", icon: Megaphone },
  { pct: 30, label: "Product Development", desc: "Defend competitive moat, serve customers better", icon: Code2 },
  { pct: 20, label: "Strategic Hires", desc: "Key hires to fuel long-term growth", icon: UserPlus },
  { pct: 10, label: "Operations & Legal", desc: "Infrastructure and compliance", icon: Building },
];

const Slide17 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-4">
      Use of Funds
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground text-center leading-[1.05]">
      Where the <span className="text-primary">Money Goes</span>
    </motion.h2>

    <motion.div variants={staggerItem} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl w-full">
      {funds.map(({ pct, label, desc, icon: Icon }) => (
        <div key={label} className="bg-secondary/40 rounded-2xl p-5 sm:p-6 border border-border relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-3xl sm:text-4xl font-black text-primary">{pct}%</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-foreground">{label}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1.5">{desc}</p>
          <div className="mt-4 h-1.5 bg-background/40 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full" style={{ width: `${pct}%` }} />
          </div>
        </div>
      ))}
    </motion.div>
  </SlideContent>
);

export default Slide17;
