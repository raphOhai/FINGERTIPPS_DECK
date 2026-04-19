import { motion } from "framer-motion";
import { Globe, Bot, ShoppingBag, Package, FileText, Mail, Users, BarChart3 } from "lucide-react";
import SlideContent, { staggerItem } from "../SlideContent";

const features = [
  { icon: Globe, text: "Launch a website in under 3 minutes" },
  { icon: Bot, text: "Automate operations with AI (Lira)" },
  { icon: ShoppingBag, text: "Sell products & accept payments online" },
  { icon: Package, text: "Manage inventory automatically" },
  { icon: FileText, text: "Create & send invoices with payment links" },
  { icon: Mail, text: "Run email marketing campaigns" },
  { icon: Users, text: "Launch affiliate programs" },
  { icon: BarChart3, text: "Analyze business performance" },
];

const Slide5 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase text-primary mb-4">
      The Solution
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground text-center leading-[1.05]">
      One Dashboard.
      <br />
      <span className="text-primary">Total Control.</span>
    </motion.h2>
    <motion.p variants={staggerItem} className="mt-4 text-base sm:text-lg text-muted-foreground text-center max-w-2xl">
      Everything a small business needs to launch, sell, automate, and grow — built into a single intuitive platform.
    </motion.p>

    <motion.div variants={staggerItem} className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 max-w-5xl w-full">
      {features.map(({ icon: Icon, text }, i) => (
        <div
          key={i}
          className="group flex flex-col items-center text-center gap-2 bg-secondary/40 hover:bg-secondary/70 hover:border-primary/40 transition-colors rounded-xl p-3 sm:p-4 border border-border"
        >
          <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
            <Icon className="w-5 h-5 text-primary" />
          </span>
          <span className="text-xs sm:text-sm text-foreground font-medium leading-snug">{text}</span>
        </div>
      ))}
    </motion.div>

    <motion.div variants={staggerItem} className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/30">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      <span className="text-sm sm:text-base font-semibold text-primary">Everything runs from one unified platform</span>
    </motion.div>
  </SlideContent>
);

export default Slide5;
