import { motion } from "framer-motion";
import { Mail, Globe } from "lucide-react";
import SlideContent, { staggerItem } from "../SlideContent";

const Slide18 = () => (
  <SlideContent>
    <motion.h2 variants={staggerItem} className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground text-center max-w-4xl leading-[1.05]">
      Powering the Next Generation of <span className="text-primary">African Entrepreneurs</span>
    </motion.h2>

    <motion.div variants={staggerItem} className="mt-10 flex flex-col gap-3 text-center max-w-2xl">
      <p className="text-base sm:text-lg text-muted-foreground">Small businesses power the African economy.</p>
      <p className="text-base sm:text-lg text-muted-foreground">But they lack the tools to operate efficiently.</p>
      <p className="text-base sm:text-xl text-foreground font-semibold mt-2">
        Fingertipps is building the AI infrastructure that helps them <span className="text-primary">launch</span>, <span className="text-primary">automate</span>, and <span className="text-primary">grow</span>.
      </p>
    </motion.div>

    <motion.div variants={staggerItem} className="mt-10 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary/70 shadow-2xl shadow-primary/30">
      <p className="text-2xl sm:text-3xl text-primary-foreground font-black tracking-wide">Join us.</p>
    </motion.div>

    <motion.div variants={staggerItem} className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
      <a href="mailto:hello@fingertipps.com" className="flex items-center gap-2 text-sm sm:text-base text-foreground hover:text-primary transition-colors">
        <Mail className="w-4 h-4" />
        hello@fingertipps.com
      </a>
      <span className="hidden sm:block w-px h-4 bg-border" />
      <a href="https://fingertipps.com" className="flex items-center gap-2 text-sm sm:text-base text-primary font-semibold">
        <Globe className="w-4 h-4" />
        Fingertipps.com
      </a>
    </motion.div>
  </SlideContent>
);

export default Slide18;
