import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";
import dashboardImg from "@/assets/dashboard-mockup.jpg";

const features = [
  "Launch a website in under 3 minutes",
  "Automate operations with AI (Lira)",
  "Sell products & accept payments online",
  "Manage inventory automatically",
  "Create & send invoices with payment links",
  "Run email marketing campaigns",
  "Launch affiliate programs",
  "Analyze business performance",
];

const Slide5 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-5">
      The Solution
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-5xl md:text-7xl font-black text-foreground text-center leading-tight">
      One Dashboard. Total Control.
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-8 flex flex-col md:flex-row items-center gap-8 max-w-5xl w-full">
      <div className="flex-1 grid grid-cols-1 gap-2">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
              <span className="text-xs text-primary font-bold">✓</span>
            </span>
            <span className="text-sm text-muted-foreground">{f}</span>
          </div>
        ))}
      </div>
      <img src={dashboardImg} alt="Fingertipps dashboard" loading="lazy" className="w-full max-w-md rounded-2xl shadow-2xl shadow-primary/10 border border-border" />
    </motion.div>
    <motion.p variants={staggerItem} className="mt-6 text-base font-semibold text-primary text-center">
      Everything runs from one unified platform.
    </motion.p>
  </SlideContent>
);

export default Slide5;
