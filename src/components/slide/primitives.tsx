import type { CSSProperties, ReactNode } from "react";
import acronymMark from "@/assets/acronym-mark.png";
import acronymWordmark from "@/assets/acronym-wordmark.png";

/* ─── A-Mark (brand PNG) ────────────────────────────────────────────────── */
export function AMark({ className = "", style = {} }: { className?: string; style?: CSSProperties }) {
  return (
    <img
      src={acronymMark}
      alt="Acronym"
      className={className}
      style={{ objectFit: "contain", ...style }}
      draggable={false}
    />
  );
}

/* Gradient-filled mark — ceremonial only (cover wordmark) */
export function AMarkGradient({ className = "", style = {} }: { className?: string; style?: CSSProperties }) {
  return (
    <img
      src={acronymMark}
      alt="Acronym"
      className={className}
      style={{ objectFit: "contain", ...style }}
      draggable={false}
    />
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <img
      src={acronymWordmark}
      alt="Acronym"
      className={className}
      style={{ height: 96, width: "auto", objectFit: "contain" }}
      draggable={false}
    />
  );
}

export function GradientRule({
  width = "100%",
  height = 4,
  className = "",
}: { width?: string | number; height?: number; className?: string }) {
  return (
    <div
      className={`bg-spectrum ${className}`}
      style={{ width, height, borderRadius: 2 }}
      aria-hidden="true"
    />
  );
}

export function EdgeStrip() {
  return (
    <div
      aria-hidden="true"
      className="absolute right-0 top-0 bottom-0 w-[5px] z-10 bg-spectrum-v"
    />
  );
}

export function SectionPill({ children }: { children: ReactNode }) {
  return (
    <div className="absolute top-0 right-[5px] bg-navy text-white font-display font-bold text-[10px] tracking-[0.18em] uppercase px-4 py-2 z-10">
      {children}
    </div>
  );
}

export function FooterChrome({ slideNumber, total }: { slideNumber: number; total: number }) {
  return (
    <div className="absolute bottom-6 left-20 right-20 flex justify-between items-baseline text-[10px] tracking-[0.12em] uppercase text-muted font-mono z-10 pointer-events-none">
      <span />
      <span>{String(slideNumber).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
    </div>
  );
}
