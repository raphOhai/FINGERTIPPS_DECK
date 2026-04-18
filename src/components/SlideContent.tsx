import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideContentProps {
  children: ReactNode;
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
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
    className="flex flex-col items-center justify-center min-h-full w-full px-5 py-16 sm:px-10 md:px-20 lg:px-32 overflow-y-auto"
  >
    {children}
  </motion.div>
);

export default SlideContent;
