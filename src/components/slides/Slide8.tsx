import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";
import trendsImg from "@/assets/why-now-trends.jpg";

const trends = [
  { title: "Social Commerce Explosion", desc: "64% of small businesses sell using social media (Moniepoint, 2026)" },
  { title: "Digital Payments Growth", desc: "Payment infrastructure in Africa is rapidly expanding" },
  { title: "AI Adoption", desc: "Businesses are adopting AI tools to automate operations" },
];

const Slide8 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
      Why Now
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl md:text-6xl font-bold text-foreground text-center">
      Three Trends Converging
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-8 flex flex-col md:flex-row items-center gap-10 max-w-5xl">
      <div className="flex flex-col gap-5 flex-1">
        {trends.map((t, i) => (
          <div key={i} className="bg-secondary/50 rounded-xl p-5 border border-border">
            <h3 className="text-lg font-bold text-primary mb-1">{t.title}</h3>
            <p className="text-sm text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </div>
      <img src={trendsImg} alt="Converging trends" loading="lazy" className="w-56 h-56 rounded-2xl object-cover hidden md:block" />
    </motion.div>
    <motion.p variants={staggerItem} className="mt-6 text-lg font-semibold text-primary text-center">
      Fingertipps sits at the intersection of all three.
    </motion.p>
  </SlideContent>
);

export default Slide8;
