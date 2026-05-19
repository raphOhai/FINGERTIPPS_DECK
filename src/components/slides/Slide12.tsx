import { motion } from "framer-motion";
import { Target, ShieldCheck, Cpu, Linkedin } from "lucide-react";
import SlideContent, { staggerItem, Eyebrow } from "../SlideContent";
import emmanuelPhoto from "@/assets/emmanuel-orilade.png";
import raphaelPhoto from "@/assets/raphael-ohai-copy2-a7069918.png";

const capabilityStrips = [
  { icon: Target, label: "Product + Strategy Leadership" },
  { icon: Cpu, label: "Engineering + Systems Execution" },
  { icon: ShieldCheck, label: "Compliance + Scale Readiness" },
];

const Slide12 = () => (
  <SlideContent>
    <Eyebrow index="12">Team</Eyebrow>

    <motion.h2
      variants={staggerItem}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-center leading-[0.95] tracking-tight"
    >
      Built by two <span className="text-primary">complementary operators.</span>
    </motion.h2>

    <motion.p
      variants={staggerItem}
      className="mt-2 sm:mt-3 max-w-3xl text-center text-[11px] sm:text-xs text-muted-foreground leading-relaxed px-2"
    >
      Operator-led, product-native, and execution-focused across strategy, engineering, and scale.
    </motion.p>

    <motion.div
      variants={staggerItem}
      className="mt-3 sm:mt-4 bg-secondary/25 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border border-border/50 max-w-4xl w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
        <div className="bg-background/40 rounded-xl border border-border/40 p-3 sm:p-4">
          <div className="flex items-center gap-2.5">
            <img
              src={emmanuelPhoto}
              alt="Emmanuel Orilade"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover border border-primary/30"
            />
            <div>
              <p className="text-[8px] sm:text-[9px] font-mono tracking-[0.2em] uppercase text-muted-foreground/80">
                Co-Founder &amp; CEO
              </p>
              <h3 className="mt-0.5 text-base sm:text-lg font-black text-foreground tracking-tight">
                Emmanuel Orilade
              </h3>
            </div>
          </div>
          <p className="mt-2 text-[10px] sm:text-[11px] text-foreground font-medium">
            Mechatronics Engineer &amp; MBA professional.
          </p>
          <p className="mt-0.5 text-[9px] sm:text-[10px] text-muted-foreground leading-snug">
            Combines deep technical problem-solving with business strategy and execution.
          </p>
          <div className="mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-primary/30 bg-primary/10">
            <span className="text-[7px] sm:text-[8px] font-mono tracking-[0.18em] uppercase text-primary">Owns</span>
            <span className="text-[9px] sm:text-[10px] text-foreground font-medium">Product &amp; Strategy</span>
          </div>
          <a
            href="https://www.linkedin.com/in/emmanueldbuilder/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex w-full items-center gap-1.5 text-[10px] sm:text-[11px] text-primary hover:text-primary/80 transition-colors"
          >
            <Linkedin className="w-3 h-3" />
            linkedin.com/in/emmanueldbuilder
          </a>
        </div>

        <div className="bg-background/40 rounded-xl border border-border/40 p-3 sm:p-4">
          <div className="flex items-center gap-2.5">
            <img
              src={raphaelPhoto}
              alt="Raphael Ohai"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover border border-primary/30"
            />
            <div>
              <p className="text-[8px] sm:text-[9px] font-mono tracking-[0.2em] uppercase text-muted-foreground/80">
                Co-Founder &amp; CTO
              </p>
              <h3 className="mt-0.5 text-base sm:text-lg font-black text-foreground tracking-tight">
                Raphael Ohai
              </h3>
            </div>
          </div>
          <p className="mt-2 text-[10px] sm:text-[11px] text-foreground font-medium">
            Computer Scientist with 5+ years building products.
          </p>
          <p className="mt-0.5 text-[9px] sm:text-[10px] text-muted-foreground leading-snug">
            Built consumer and enterprise solutions used by millions of users globally.
          </p>
          <div className="mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-primary/30 bg-primary/10">
            <span className="text-[7px] sm:text-[8px] font-mono tracking-[0.18em] uppercase text-primary">Owns</span>
            <span className="text-[9px] sm:text-[10px] text-foreground font-medium">Engineering &amp; Delivery</span>
          </div>
          <a
            href="https://www.linkedin.com/in/raphael-ohai-micheal/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex w-full items-center gap-1.5 text-[10px] sm:text-[11px] text-primary hover:text-primary/80 transition-colors"
          >
            <Linkedin className="w-3 h-3" />
            linkedin.com/in/raphael-ohai-micheal
          </a>
        </div>
      </div>

      <div className="mt-3 sm:mt-4 h-px bg-border/60" />

      <div className="mt-2.5 sm:mt-3 grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-2">
        {capabilityStrips.map(({ icon: Icon, label }, i) => (
          <div
            key={label}
            className="bg-background/40 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-2 sm:py-2.5 border border-border/40 flex items-center gap-2 sm:gap-2.5"
          >
            <span className="text-[8px] sm:text-[9px] font-mono text-muted-foreground/60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary flex-shrink-0" strokeWidth={1.75} />
            <span className="text-[10px] sm:text-[11px] md:text-xs text-foreground font-medium leading-snug">
              {label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>

    <motion.p
      variants={staggerItem}
      className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] text-muted-foreground italic text-center px-2"
    >
      Building a lean, high-output leadership team to execute through the next stage of growth.
    </motion.p>
  </SlideContent>
);

export default Slide12;
