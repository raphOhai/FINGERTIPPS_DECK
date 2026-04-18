import { motion } from "framer-motion";
import { GraduationCap, Share2, Send } from "lucide-react";
import SlideContent, { staggerItem } from "../SlideContent";

const loops = [
  { icon: GraduationCap, title: "Campus Expansion", desc: "Universities have dense clusters of student entrepreneurs" },
  { icon: Share2, title: "Affiliate Distribution", desc: "Creators earn commissions promoting the platform" },
  { icon: Send, title: "Direct Outreach", desc: "Targeted outreach to vendors on Instagram & WhatsApp" },
];

const Slide12 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-4">
      Growth Strategy
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground text-center leading-[1.05]">
      Three <span className="text-primary">Growth Loops</span>
    </motion.h2>

    <motion.div variants={staggerItem} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl w-full">
      {loops.map(({ icon: Icon, title, desc }, i) => (
        <div key={i} className="relative bg-secondary/40 rounded-2xl p-6 border border-border hover:border-primary/40 transition-colors">
          <div className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-black shadow-lg">
            {i + 1}
          </div>
          <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
      ))}
    </motion.div>

    <motion.p variants={staggerItem} className="mt-8 text-base sm:text-lg font-semibold text-primary text-center max-w-3xl">
      These channels allow Fingertipps to reach 50,000+ businesses rapidly.
    </motion.p>
  </SlideContent>
);

export default Slide12;
