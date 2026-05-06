import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, List, X } from "lucide-react";
import type { ReactNode } from "react";
import { GradientRule } from "./primitives";
import { SLIDES, TOTAL } from "./manifest";

/* ─── Bottom auto-hide nav bar ──────────────────────────────────────────── */
export function NavControls({
  current, onPrev, onNext, onToggleToc, onToggleFs, isFullscreen, visible,
}: {
  current: number;
  onPrev: () => void;
  onNext: () => void;
  onToggleToc: () => void;
  onToggleFs: () => void;
  isFullscreen: boolean;
  visible: boolean;
}) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12 }}
      transition={{ duration: 0.2 }}
      className="fixed left-1/2 -translate-x-1/2 bottom-6 z-40"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <div
        className="flex items-center gap-3 px-5 py-2.5 backdrop-blur-md border-t-[1px]"
        style={{
          background: "rgba(2, 44, 55, 0.88)",
          borderImage: "linear-gradient(90deg, #00E0FF 0%, #7A3F9F 50%, #CFFF1D 100%) 1",
        }}
      >
        <NavBtn onClick={onPrev} disabled={current === 1} ariaLabel="Previous slide">
          <ChevronLeft size={18} />
        </NavBtn>
        <div className="font-mono text-[11px] text-white/80 tabular-nums tracking-wider min-w-[52px] text-center">
          {String(current).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
        </div>
        <div className="w-[180px] h-[2px] bg-white/15 relative overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 bottom-0 bg-spectrum"
            initial={false}
            animate={{ width: `${(current / TOTAL) * 100}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        <NavBtn onClick={onNext} disabled={current === TOTAL} ariaLabel="Next slide">
          <ChevronRight size={18} />
        </NavBtn>
        <div className="w-px h-6 bg-white/15 mx-1" />
        <NavBtn onClick={onToggleToc} ariaLabel="Toggle table of contents">
          <List size={16} />
        </NavBtn>
        <NavBtn onClick={onToggleFs} ariaLabel="Toggle fullscreen">
          {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </NavBtn>
      </div>
    </motion.div>
  );
}

function NavBtn({
  children, onClick, disabled, ariaLabel,
}: { children: ReactNode; onClick: () => void; disabled?: boolean; ariaLabel: string }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="w-9 h-9 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan transition-colors"
    >
      {children}
    </button>
  );
}

/* ─── Table of Contents — slide-out drawer from the right ───────────────── */
export function TableOfContents({
  open, onClose, current, onJump,
}: {
  open: boolean;
  onClose: () => void;
  current: number;
  onJump: (id: number) => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="toc-backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-teal-900/60 z-50"
          />
          <motion.aside
            key="toc-drawer"
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed right-0 top-0 bottom-0 w-[420px] bg-teal-900 text-white z-50 flex flex-col"
          >
            <div className="px-8 pt-8 pb-6 border-b border-white/10">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-display font-bold text-[14px] tracking-[0.18em] uppercase">
                    AIO Strategy 2.0
                  </div>
                  <div className="font-display font-light text-[11px] tracking-[0.18em] uppercase text-white/50 mt-1">
                    Table of Contents
                  </div>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close table of contents"
                  className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="mt-4">
                <GradientRule width="100%" height={3} />
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto py-2">
              {SLIDES.map(({ id, title, blurb }) => {
                const active = id === current;
                return (
                  <button
                    key={id}
                    onClick={() => onJump(id)}
                    className={`w-full text-left px-8 py-3.5 flex gap-5 items-baseline border-l-4 transition-all ${
                      active
                        ? "bg-white/5 border-lime"
                        : "border-transparent hover:bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <span className={`font-mono text-[11px] tabular-nums w-7 ${active ? "text-lime" : "text-white/40"}`}>
                      {String(id).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span className={`block font-display font-bold text-[13px] tracking-[0.06em] uppercase ${active ? "text-white" : "text-white/85"}`}>
                        {title}
                      </span>
                      <span className="block text-[12px] text-white/50 mt-1">{blurb}</span>
                    </span>
                  </button>
                );
              })}
            </nav>

            <div className="px-8 py-5 border-t border-white/10 font-mono text-[10px] tracking-[0.14em] uppercase text-white/40">
              Press T to toggle · Esc to close
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── 16:9 stage that scales to fit ─────────────────────────────────────── */
export function SlideStage({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full grid place-items-center bg-teal-900 p-4">
      <div
        className="relative bg-paper shadow-2xl"
        style={{
          width: "min(calc(100vw - 32px), calc((100vh - 32px) * 16 / 9))",
          aspectRatio: "16 / 9",
        }}
      >
        {children}
      </div>
    </div>
  );
}
