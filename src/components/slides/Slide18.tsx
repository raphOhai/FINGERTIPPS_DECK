import { motion } from "framer-motion";
import SlideContent, { staggerItem } from "../SlideContent";
import logo from "@/assets/fingertipps-logo.png";

const Slide18 = () => (
  <SlideContent>
    <motion.img variants={staggerItem} src={logo} alt="Fingertipps" width={120} height={120} className="mb-6" />
    <motion.h2 variants={staggerItem} className="text-4xl md:text-6xl font-bold text-foreground text-center max-w-3xl">
      Powering the Next Generation of African Entrepreneurs
    </motion.h2>
    <motion.div variants={staggerItem} className="mt-8 flex flex-col gap-3 text-center max-w-2xl">
      <p className="text-lg text-muted-foreground">Small businesses power the African economy.</p>
      <p className="text-lg text-muted-foreground">But they lack the tools to operate efficiently.</p>
      <p className="text-lg text-foreground font-semibold">
        Fingertipps is building the AI infrastructure that helps them launch, automate, and grow.
      </p>
    </motion.div>
    <motion.p variants={staggerItem} className="mt-8 text-2xl text-primary font-bold">
      Join us.
    </motion.p>
    <motion.div variants={staggerItem} className="mt-6 flex flex-col items-center gap-1 text-sm text-muted-foreground">
      <p>Emmanuel Orilade — hello@fingertipps.com</p>
      <p className="text-primary font-medium">Fingertipps.com</p>
    </motion.div>
  </SlideContent>
);

export default Slide18;
