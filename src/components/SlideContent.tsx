import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideContentProps {
  children: ReactNode;
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const SlideContent = ({ children }: SlideContentProps) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    animate="visible"
    className="flex flex-col items-center justify-center h-full w-full px-16 md:px-32"
  >
    {children}
  </motion.div>
);

export default SlideContent;
