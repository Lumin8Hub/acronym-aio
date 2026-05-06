import { createFileRoute, useNavigate, useParams } from "@tanstack/react-router";
import { useCallback, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useAutoHide, useFullscreen, useKeyboardNav } from "@/hooks/useDeck";
import { SLIDES, TOTAL } from "@/components/slide/manifest";
import { NavControls, SlideStage, TableOfContents } from "@/components/slide/shell";

export const Route = createFileRoute("/slide/$id")({
  component: SlideRoute,
});

function SlideRoute() {
  const { id } = useParams({ from: "/slide/$id" });
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [tocOpen, setTocOpen] = useState(false);
  const [isFs, toggleFs] = useFullscreen(containerRef);
  const reduceMotion = useReducedMotion();
  const visible = useAutoHide(3000);

  const current = useMemo(() => {
    const n = parseInt(id, 10);
    return Number.isFinite(n) && n >= 1 && n <= TOTAL ? n : 1;
  }, [id]);

  const goTo = useCallback((n: number) => {
    const target = Math.max(1, Math.min(TOTAL, n));
    navigate({ to: "/slide/$id", params: { id: String(target) } });
  }, [navigate]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const first = useCallback(() => goTo(1), [goTo]);
  const last = useCallback(() => goTo(TOTAL), [goTo]);

  useKeyboardNav({
    onNext: next,
    onPrev: prev,
    onFirst: first,
    onLast: last,
    onFullscreen: toggleFs,
    onToc: () => setTocOpen((v) => !v),
    onEsc: () => setTocOpen(false),
  });

  const slide = SLIDES.find((s) => s.id === current) ?? SLIDES[0];
  const SlideComponent = slide.Component;

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const };

  return (
    <div ref={containerRef} className="w-screen h-screen overflow-hidden bg-teal-900 relative font-body">
      <SlideStage>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={transition}
            className="absolute inset-0"
          >
            <SlideComponent slideNumber={current} />
          </motion.div>
        </AnimatePresence>
      </SlideStage>

      <NavControls
        current={current}
        onPrev={prev}
        onNext={next}
        onToggleToc={() => setTocOpen((v) => !v)}
        onToggleFs={toggleFs}
        isFullscreen={isFs}
        visible={visible || tocOpen}
      />

      <TableOfContents
        open={tocOpen}
        onClose={() => setTocOpen(false)}
        current={current}
        onJump={(n) => { goTo(n); setTocOpen(false); }}
      />
    </div>
  );
}
