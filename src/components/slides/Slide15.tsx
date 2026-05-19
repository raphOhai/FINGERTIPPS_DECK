import { motion } from "framer-motion";
import { Mail, Globe, ArrowRight, Calendar, FileText } from "lucide-react";
import SlideContent, { staggerItem } from "../SlideContent";

const Slide15 = () => (
  <SlideContent>
    <motion.div variants={staggerItem} className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-7">
      <span className="h-px w-6 sm:w-10 bg-primary" />
      <span className="text-[9px] sm:text-[11px] font-mono tracking-[0.3em] uppercase text-primary">
        Closing
      </span>
      <span className="h-px w-6 sm:w-10 bg-primary" />
    </motion.div>

    <motion.h2
      variants={staggerItem}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground text-center max-w-5xl leading-[0.95] tracking-tight px-2"
    >
      Powering the next generation of{" "}
      <span className="text-primary">African entrepreneurs.</span>
    </motion.h2>

    <motion.div
      variants={staggerItem}
      className="mt-6 sm:mt-8 max-w-2xl text-center space-y-2 sm:space-y-2.5 px-2"
    >
      <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
        Small businesses power the African economy.
      </p>
      <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
        But they lack the tools to operate efficiently.
      </p>
      <p className="text-base sm:text-lg md:text-xl text-foreground font-semibold pt-1.5 sm:pt-2">
        Fingertipps is the AI infrastructure that helps them{" "}
        <span className="text-primary">launch</span>,{" "}
        <span className="text-primary">automate</span>, and{" "}
        <span className="text-primary">grow</span>.
      </p>
    </motion.div>

    {/* Primary CTA: book a call */}
    <motion.div
      variants={staggerItem}
      className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
    >
      <a
        href="https://cal.com/emmanuel-orilade/fingertipps"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2.5 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-primary hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
      >
        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground" strokeWidth={2} />
        <span className="text-sm sm:text-base text-primary-foreground font-bold tracking-wide">
          Book a 30-min call
        </span>
        <ArrowRight
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground group-hover:translate-x-1 transition-transform"
          strokeWidth={2.5}
        />
      </a>
      <a
        href="mailto: raphael@fingertipps.com?subject=Fingertipps%20%E2%80%94%20Data%20Room%20Request"
        className="inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border border-border/60 hover:border-primary/40 transition-colors w-full sm:w-auto justify-center"
      >
        <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground" strokeWidth={1.75} />
        <span className="text-sm sm:text-base text-foreground font-medium">
          Request data room
        </span>
      </a>
    </motion.div>

    <motion.div
      variants={staggerItem}
      className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 md:gap-8"
    >
      <a
        href="mailto: raphael@fingertipps.com"
        className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.75} />
        <span className="font-mono"> raphael@fingertipps.com</span>
      </a>
      <span className="hidden sm:block w-px h-4 bg-border" />
      <a
        href="https://fingertipps.com"
        className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-foreground hover:text-primary transition-colors"
      >
        <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.75} />
        <span className="font-mono">fingertipps.com</span>
      </a>
    </motion.div>
  </SlideContent>
);

export default Slide15;
