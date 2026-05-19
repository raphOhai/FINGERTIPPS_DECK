import { AnimatePresence, motion } from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  type RefObject,
} from "react";
import { createPortal } from "react-dom";
import {
  Globe,
  Boxes,
  Receipt,
  Users,
  Megaphone,
  Bot,
  LineChart,
  X,
  type LucideIcon,
} from "lucide-react";
import SlideContent, { staggerItem, Eyebrow } from "../SlideContent";

const liraVideoUrl =
  "https://fingertippsstoreimages.lon1.cdn.digitaloceanspaces.com/landingpageAssets/LIRA_THE_BUILDER.mp4";
const invoiceVideoUrl =
  "https://fingertippsstoreimages.lon1.cdn.digitaloceanspaces.com/landingpageAssets/LIRA_INVOICE_FINAL_X_compressed.mp4";

interface Product {
  icon: LucideIcon;
  title: string;
  desc: string;
  featured?: boolean;
  previewLabel?: string;
  videoUrl?: string;
}

const products: Product[] = [
  { icon: Bot, title: "Lira &mdash; AI Agent", desc: "Manages operations, talks to customers and recommends products.", featured: true, previewLabel: "Lira Preview", videoUrl: liraVideoUrl },
  { icon: Globe, title: "Website Builder", desc: "Launch a branded online store in minutes." },
  { icon: Boxes, title: "Inventory Automation", desc: "Stock updates with every sale." },
  { icon: Receipt, title: "Invoice Payments", desc: "Send invoices with one-click pay links.", previewLabel: "Invoice Preview", videoUrl: invoiceVideoUrl },
  { icon: Users, title: "Affiliate Engine", desc: "Turn customers into sales partners." },
  { icon: Megaphone, title: "Marketing Campaigns", desc: "Targeted email and social campaigns." },
  { icon: LineChart, title: "Business Analytics", desc: "Understand sales performance and growth." },
];

interface ProductCardProps extends Product {
  index: number;
  onPreviewEnd: () => void;
  onPreviewFocus: (event: FocusEvent<HTMLDivElement>, videoUrl: string, previewLabel: string) => void;
  onPreviewOpen: (videoUrl: string) => void;
  onPreviewMove: (event: PointerEvent<HTMLDivElement>, videoUrl: string, previewLabel: string) => void;
}

type PreviewPlacement = "above" | "below";

interface PreviewState {
  label: string;
  placement: PreviewPlacement;
  videoUrl: string;
  x: number;
  y: number;
}

const getPreviewPosition = (clientX: number, clientY: number): Omit<PreviewState, "label" | "videoUrl"> => {
  const viewportWidth = typeof window === "undefined" ? 1280 : window.innerWidth;
  const viewportHeight = typeof window === "undefined" ? 720 : window.innerHeight;
  const previewWidth = Math.min(viewportWidth * 0.74, 320);
  const previewHeight = previewWidth * 0.5625 + 48;
  const padding = 14;
  const x = Math.min(
    Math.max(clientX, previewWidth / 2 + padding),
    viewportWidth - previewWidth / 2 - padding,
  );
  const belowY = clientY + 18;

  if (belowY + previewHeight <= viewportHeight - padding) {
    return { x, y: belowY, placement: "below" };
  }

  return {
    x,
    y: Math.max(clientY - 18, previewHeight + padding),
    placement: "above",
  };
};

const FloatingVideoPreview = ({
  preview,
  videoRef,
}: {
  preview: PreviewState | null;
  videoRef: RefObject<HTMLVideoElement>;
}) => {
  if (!preview || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      className={`pointer-events-none fixed z-[100] -translate-x-1/2 ${
        preview.placement === "above" ? "-translate-y-full" : ""
      }`}
      style={{ left: preview.x, top: preview.y }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: preview.placement === "below" ? -6 : 6 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.16, ease: "easeOut" }}
        className="w-[min(74vw,20rem)] overflow-hidden rounded-xl border border-primary/60 bg-background/95 shadow-[0_24px_70px_hsl(var(--background)/0.75),0_0_34px_hsl(var(--primary)/0.22)] backdrop-blur"
      >
        <div className="relative aspect-video bg-secondary/70">
          <video
            ref={videoRef}
            src={preview.videoUrl}
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
        <div className="flex items-center justify-between gap-3 px-3 py-2">
          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-primary">
            {preview.label}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary))]" />
        </div>
      </motion.div>
    </div>,
    document.body,
  );
};

const FullscreenVideoPlayer = ({
  videoUrl,
  onClose,
}: {
  videoUrl: string | null;
  onClose: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoUrl) {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    const startFromBeginning = () => {
      video.currentTime = 0;
      video.muted = false;
      video.volume = 1;
      void video.play().catch(() => undefined);
    };

    if (video.readyState > 0) {
      startFromBeginning();
      return;
    }

    video.addEventListener("loadedmetadata", startFromBeginning, { once: true });

    return () => {
      video.removeEventListener("loadedmetadata", startFromBeginning);
    };
  }, [videoUrl]);

  useEffect(() => {
    if (!videoUrl) {
      return;
    }

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      event.stopPropagation();

      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);

    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [onClose, videoUrl]);

  if (!videoUrl || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[120] flex items-center justify-center bg-background/95 p-3 sm:p-6 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative h-full w-full overflow-hidden rounded-xl border border-primary/50 bg-black shadow-[0_0_70px_hsl(var(--primary)/0.22)]"
          initial={{ scale: 0.92, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.96, y: 10 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
        >
          <video
            ref={videoRef}
            src={videoUrl}
            className="h-full w-full bg-black object-contain"
            autoPlay
            controls
            muted={false}
            playsInline
            preload="auto"
          />
          <button
            type="button"
            aria-label="Close video"
            onClick={onClose}
            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <X className="h-4 w-4" strokeWidth={2} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
};

const ProductCard = ({
  icon: Icon,
  title,
  desc,
  featured,
  previewLabel,
  videoUrl,
  index,
  onPreviewEnd,
  onPreviewFocus,
  onPreviewOpen,
  onPreviewMove,
}: ProductCardProps) => {
  const hasVideoPreview = Boolean(videoUrl);
  const label = previewLabel ?? "Video Preview";

  return (
    <div
      className={`group relative rounded-lg sm:rounded-xl p-2.5 sm:p-3 border transition-all duration-300 ${
        featured
          ? "cursor-pointer bg-primary/[0.14] border-primary/70 sm:col-span-2 lg:col-span-1 ring-1 ring-primary/40 hover:border-primary hover:shadow-[0_18px_48px_hsl(var(--primary)/0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/75 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          : hasVideoPreview
            ? "cursor-pointer bg-secondary/25 border-border/50 hover:border-primary/45 hover:shadow-[0_14px_36px_hsl(var(--primary)/0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/65 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            : "bg-secondary/25 border-border/50 hover:border-primary/30"
      }`}
      onPointerEnter={videoUrl ? (event) => onPreviewMove(event, videoUrl, label) : undefined}
      onPointerMove={videoUrl ? (event) => onPreviewMove(event, videoUrl, label) : undefined}
      onPointerLeave={hasVideoPreview ? onPreviewEnd : undefined}
      onClick={videoUrl ? () => onPreviewOpen(videoUrl) : undefined}
      onFocus={videoUrl ? (event) => onPreviewFocus(event, videoUrl, label) : undefined}
      onBlur={hasVideoPreview ? onPreviewEnd : undefined}
      onKeyDown={videoUrl ? (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onPreviewOpen(videoUrl);
        }
      } : undefined}
      role={hasVideoPreview ? "button" : undefined}
      tabIndex={hasVideoPreview ? 0 : undefined}
    >
      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
        <Icon className={`${featured ? "w-4 h-4 sm:w-5 sm:h-5" : "w-3.5 h-3.5 sm:w-4 sm:h-4"} text-primary`} strokeWidth={1.9} />
        {featured ? (
          <span className="text-[7px] sm:text-[9px] font-mono tracking-[0.16em] sm:tracking-[0.2em] uppercase text-primary bg-primary/20 border border-primary/40 px-1.5 sm:px-2 py-0.5 rounded-full">
            Fingertipps Flagship
          </span>
        ) : hasVideoPreview ? (
          <span className="text-[7px] sm:text-[9px] font-mono tracking-[0.16em] uppercase text-primary bg-primary/15 border border-primary/35 px-1.5 sm:px-2 py-0.5 rounded-full">
            Demo
          </span>
        ) : (
          <span className="text-[8px] sm:text-[9px] font-mono text-muted-foreground/50 tracking-widest">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3
        className={`${featured ? "text-xs sm:text-base" : "text-[11px] sm:text-sm"} font-bold text-foreground leading-tight`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className={`${featured ? "text-[10px] sm:text-xs text-foreground/90" : "text-[9px] sm:text-[11px] text-muted-foreground"} leading-snug mt-0.5`}>
        {desc}
      </p>
      {featured && (
        <p className="mt-1.5 text-[9px] sm:text-[11px] text-primary font-medium hidden sm:block">
          Hover to preview Lira under your cursor.
        </p>
      )}
    </div>
  );
};

const Slide6 = () => {
  const [preview, setPreview] = useState<PreviewState | null>(null);
  const [fullscreenVideoUrl, setFullscreenVideoUrl] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewVideoUrl = preview?.videoUrl;

  useEffect(() => {
    if (!previewVideoUrl || !videoRef.current) {
      return;
    }

    videoRef.current.muted = true;
    void videoRef.current.play().catch(() => undefined);
  }, [previewVideoUrl]);

  const handlePreviewMove = (event: PointerEvent<HTMLDivElement>, videoUrl: string, label: string) => {
    setPreview({
      label,
      videoUrl,
      ...getPreviewPosition(event.clientX, event.clientY),
    });
  };

  const handlePreviewFocus = (event: FocusEvent<HTMLDivElement>, videoUrl: string, label: string) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setPreview({
      label,
      videoUrl,
      ...getPreviewPosition(rect.left + rect.width / 2, rect.bottom),
    });
  };

  const handlePreviewEnd = () => {
    const video = videoRef.current;

    if (video) {
      video.pause();

      if (video.readyState > 0) {
        video.currentTime = 0;
      }
    }

    setPreview(null);
  };

  const handlePreviewOpen = (videoUrl: string) => {
    handlePreviewEnd();
    setFullscreenVideoUrl(videoUrl);
  };

  return (
    <SlideContent>
      <Eyebrow index="06">Product</Eyebrow>

      <motion.h2
        variants={staggerItem}
        className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-foreground text-center leading-[0.95] tracking-tight"
      >
        The full
        <br />
        <span className="text-primary">commerce stack.</span>
      </motion.h2>

      <motion.p
        variants={staggerItem}
        className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-[10px] sm:text-xs text-primary text-center font-semibold"
      >
        Hover demo cards to preview.
      </motion.p>

      <motion.div
        variants={staggerItem}
        className="mt-4 sm:mt-6 grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5 max-w-5xl w-full"
      >
        {products.map((product, i) => (
          <ProductCard
            key={product.title}
            {...product}
            index={i}
            onPreviewEnd={handlePreviewEnd}
            onPreviewFocus={handlePreviewFocus}
            onPreviewOpen={handlePreviewOpen}
            onPreviewMove={handlePreviewMove}
          />
        ))}
      </motion.div>

      <FloatingVideoPreview preview={preview} videoRef={videoRef} />
      <FullscreenVideoPlayer
        videoUrl={fullscreenVideoUrl}
        onClose={() => setFullscreenVideoUrl(null)}
      />
    </SlideContent>
  );
};

export default Slide6;
