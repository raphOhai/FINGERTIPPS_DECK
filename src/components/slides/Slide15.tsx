import { motion } from "framer-motion";
import { Briefcase, Rocket, Code } from "lucide-react";
import SlideContent, { staggerItem } from "../SlideContent";

const expertise = [
  { icon: Briefcase, label: "Commerce Infrastructure" },
  { icon: Rocket, label: "Startup Operations" },
  { icon: Code, label: "Product Development" },
];

const Slide15 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-4">
      The Team
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground text-center leading-[1.05]">
      Built by an <span className="text-primary">Operator</span>
    </motion.h2>

    <motion.div variants={staggerItem} className="mt-10 bg-gradient-to-br from-secondary/60 to-secondary/20 rounded-2xl p-6 sm:p-8 border border-border max-w-2xl w-full flex flex-col items-center">
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-primary to-primary/60 border-4 border-primary/40 flex items-center justify-center shadow-xl shadow-primary/20">
        <span className="text-3xl sm:text-4xl font-black text-primary-foreground">EO</span>
      </div>
      <h3 className="mt-5 text-2xl sm:text-3xl font-black text-foreground">Emmanuel Orilade</h3>
      <p className="text-primary font-bold mt-1">Co-Founder & CEO</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
        {expertise.map(({ icon: Icon, label }) => (
          <div key={label} className="bg-background/40 rounded-xl p-3 border border-border/50 flex items-center gap-2.5">
            <Icon className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-xs sm:text-sm text-foreground font-medium">{label}</span>
          </div>
        ))}
      </div>
    </motion.div>

    <motion.p variants={staggerItem} className="mt-6 text-sm text-muted-foreground italic text-center">
      Additional team members will be added as the team grows.
    </motion.p>
  </SlideContent>
);

export default Slide15;
