import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";
import strategyImg from "@/assets/growth-strategy.jpg";

const loops = [
  { title: "Campus Expansion", desc: "Universities have dense clusters of student entrepreneurs" },
  { title: "Affiliate Distribution", desc: "Creators earn commissions promoting the platform" },
  { title: "Direct Outreach", desc: "Direct outreach to store owners and vendors on Instagram & WhatsApp" },
];

const Slide12 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
      Growth Strategy
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl md:text-6xl font-bold text-foreground text-center">
      Three Growth Loops
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-8 flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
      <div className="flex flex-col gap-5 flex-1">
        {loops.map((l, i) => (
          <div key={i} className="bg-secondary/50 rounded-xl p-5 border border-border flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center flex-shrink-0">
              <span className="text-lg font-bold text-primary">{i + 1}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">{l.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{l.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <img src={strategyImg} alt="Growth" loading="lazy" className="w-56 h-56 rounded-2xl object-cover hidden md:block" />
    </motion.div>
    <motion.p variants={staggerItem} className="mt-6 text-base font-semibold text-primary text-center">
      These channels allow Fingertipps to reach 50,000+ businesses rapidly.
    </motion.p>
  </SlideContent>
);

export default Slide12;
