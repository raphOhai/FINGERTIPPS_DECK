import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";

const team = [
  { role: "CEO & Co-Founder", bg: "Ex-Shopify, 10+ yrs in commerce" },
  { role: "CTO & Co-Founder", bg: "Ex-Google AI, ML infrastructure" },
  { role: "Head of Product", bg: "Ex-Stripe, fintech & payments" },
  { role: "VP Engineering", bg: "Ex-Amazon, distributed systems" },
];

const Slide7 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
      The Team
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-5xl md:text-7xl font-bold text-foreground text-center">
      Built by Operators
    </motion.h2>
    <motion.p variants={staggerItem} className="mt-4 text-xl text-muted-foreground max-w-2xl text-center">
      A team that's lived the problem — from the world's top commerce and AI companies.
    </motion.p>
    <motion.div variants={staggerItem} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full">
      {team.map((t) => (
        <div key={t.role} className="flex flex-col items-center text-center gap-3">
          <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">{t.role[0]}</span>
          </div>
          <h3 className="text-sm font-bold text-foreground">{t.role}</h3>
          <p className="text-xs text-muted-foreground">{t.bg}</p>
        </div>
      ))}
    </motion.div>
  </SlideContent>
);

export default Slide7;
