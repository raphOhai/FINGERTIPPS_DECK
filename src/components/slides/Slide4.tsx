import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";
import logo from "@/assets/fingertipps-logo.png";

const Slide4 = () => (
  <SlideContent>
    <motion.p variants={staggerItem} className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
      What is Fingertipps?
    </motion.p>
    <motion.img variants={staggerItem} src={logo} alt="Fingertipps" width={100} height={100} className="mb-6" />
    <motion.h2 variants={staggerItem} className="text-4xl md:text-6xl font-bold text-foreground text-center max-w-4xl">
      AI-Powered Commerce System
    </motion.h2>
    <motion.p variants={staggerItem} className="mt-6 text-xl text-muted-foreground max-w-3xl text-center leading-relaxed">
      Fingertipps is an AI-powered commerce system that helps small businesses{" "}
      <span className="text-primary font-semibold">launch</span>,{" "}
      <span className="text-primary font-semibold">automate</span>, and{" "}
      <span className="text-primary font-semibold">scale</span> from one dashboard.
    </motion.p>
    <motion.div variants={staggerItem} className="mt-10 flex gap-8">
      {["Launch", "Sell", "Automate", "Grow"].map((word) => (
        <div key={word} className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center">
            <span className="text-xl font-bold text-primary">{word[0]}</span>
          </div>
          <span className="text-sm font-semibold text-foreground">{word}</span>
        </div>
      ))}
    </motion.div>
  </SlideContent>
);

export default Slide4;
