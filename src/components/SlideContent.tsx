import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideContentProps {
  children: ReactNode;
  align?: "center" | "start";
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const SlideContent = ({ children, align = "center" }: SlideContentProps) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    animate="visible"
    className={`flex flex-col ${
      align === "center" ? "items-center" : "items-start"
    } h-full w-full px-4 sm:px-8 md:px-16 lg:px-24 pt-14 pb-16 sm:pt-16 sm:pb-20 overflow-hidden`}
  >
    <div
      className={`flex flex-col ${
        align === "center" ? "items-center" : "items-start"
      } w-full h-full justify-center slide-content-inner`}
    >
      {children}
    </div>
  </motion.div>
);

interface EyebrowProps {
  index?: string;
  children: ReactNode;
  className?: string;
}

export const Eyebrow = ({ index, children, className = "" }: EyebrowProps) => (
  <motion.div
    variants={staggerItem}
    className={`flex items-center gap-2.5 sm:gap-3.5 mb-4 sm:mb-5 ${className}`}
  >
    <span className="h-px w-7 sm:w-10 bg-primary" />
    {index && (
      <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] text-primary/85">
        {index}
      </span>
    )}
    <span className="text-[11px] sm:text-xs md:text-sm font-mono font-semibold tracking-[0.24em] uppercase text-primary">
      {children}
    </span>
  </motion.div>
);

export default SlideContent;
