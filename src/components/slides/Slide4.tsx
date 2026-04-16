import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";
import aiImg from "@/assets/ai-automation.jpg";

const features = [
  { title: "AI Store Builder", desc: "Launch a fully branded online store in minutes with AI-generated layouts, copy, and product listings." },
  { title: "Smart Inventory", desc: "Predict demand, auto-reorder stock, and sync across all channels in real time." },
  { title: "Auto Marketing", desc: "AI creates and schedules campaigns, emails, and social posts based on your customer data." },
  { title: "Unified Analytics", desc: "One view of sales, traffic, and customer behavior across every channel." },
];

const Slide4 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
      How It Works
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-5xl md:text-6xl font-bold text-foreground text-center">
      AI That Runs Your Business
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-10 flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
      <img src={aiImg} alt="AI automation flow" loading="lazy" className="w-64 h-64 rounded-2xl object-cover flex-shrink-0" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {features.map((f) => (
          <div key={f.title} className="bg-secondary/50 rounded-xl p-5 border border-border">
            <h3 className="text-lg font-bold text-primary mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </SlideContent>
);

export default Slide4;
