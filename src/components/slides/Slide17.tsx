import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";

const funds = [
  { pct: "40%", label: "Marketing & Sales", desc: "Customer acquisition, retention, and revenue growth" },
  { pct: "30%", label: "Product Development", desc: "Defend competitive moat, serve customers better" },
  { pct: "20%", label: "Strategic Hires", desc: "Key hires to fuel long-term growth" },
  { pct: "10%", label: "Operations & Legal", desc: "Infrastructure and compliance" },
];

const Slide17 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
      Use of Funds
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl md:text-6xl font-bold text-foreground text-center">
      Where the Money Goes
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-10 grid grid-cols-2 gap-5 max-w-3xl w-full">
      {funds.map((f) => (
        <div key={f.label} className="bg-secondary/50 rounded-xl p-5 border border-border">
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-black text-primary">{f.pct}</span>
            <span className="text-base font-bold text-foreground">{f.label}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
        </div>
      ))}
    </motion.div>
  </SlideContent>
);

export default Slide17;
