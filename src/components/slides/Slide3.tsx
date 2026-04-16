import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";
import dashboardImg from "@/assets/dashboard-mockup.jpg";

const Slide3 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
      The Solution
    </motion.p>
    <motion.h2 variants={staggerItem} className="text-5xl md:text-7xl font-bold text-foreground text-center">
      One Dashboard. Total Control.
    </motion.h2>
    <motion.p variants={staggerItem} className="mt-4 text-xl text-muted-foreground max-w-2xl text-center">
      Fingertipps unifies storefront, inventory, payments, marketing, and analytics — powered by AI that works while you sleep.
    </motion.p>
    <motion.div variants={staggerItem} className="mt-10 w-full max-w-4xl">
      <img
        src={dashboardImg}
        alt="Fingertipps unified dashboard"
        loading="lazy"
        className="w-full rounded-2xl shadow-2xl shadow-primary/10 border border-border"
      />
    </motion.div>
  </SlideContent>
);

export default Slide3;
