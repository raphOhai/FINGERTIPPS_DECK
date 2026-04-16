import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";
import roadmapImg from "@/assets/roadmap.jpg";

const items = [
  { title: "AI Website Builder", desc: "Build a website by simply describing it in a chat interface", status: "Next" },
  { title: "Lira AI Expansion", desc: "Advanced sales automation and customer support", status: "Q3" },
  { title: "Marketplace Integration", desc: "Discover and buy from Fingertipps merchants", status: "Q4" },
];

const Slide13 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
      Product Roadmap
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl md:text-6xl font-bold text-foreground text-center">
      What's Coming Next
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-8 flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
      <div className="flex flex-col gap-5 flex-1">
        {items.map((item) => (
          <div key={item.title} className="bg-secondary/50 rounded-xl p-5 border border-border flex items-start gap-4">
            <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-xs font-bold text-primary flex-shrink-0">
              {item.status}
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <img src={roadmapImg} alt="Roadmap" loading="lazy" className="w-64 h-40 rounded-2xl object-cover hidden md:block" />
    </motion.div>
  </SlideContent>
);

export default Slide13;
