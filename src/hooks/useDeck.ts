import { useCallback, useEffect, useRef, useState } from "react";

export function useFullscreen(elementRef: React.RefObject<HTMLElement | null>) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggle = useCallback(() => {
    const el = elementRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.();
    }
  }, [elementRef]);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  return [isFullscreen, toggle] as const;
}

type KeyHandlers = {
  onNext?: () => void;
  onPrev?: () => void;
  onFirst?: () => void;
  onLast?: () => void;
  onFullscreen?: () => void;
  onToc?: () => void;
  onEsc?: () => void;
};

export function useKeyboardNav(handlers: KeyHandlers) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable) return;

      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "PageDown":
          e.preventDefault(); handlers.onNext?.(); break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault(); handlers.onPrev?.(); break;
        case "Home":
          e.preventDefault(); handlers.onFirst?.(); break;
        case "End":
          e.preventDefault(); handlers.onLast?.(); break;
        case "f":
        case "F":
          e.preventDefault(); handlers.onFullscreen?.(); break;
        case "t":
        case "T":
          e.preventDefault(); handlers.onToc?.(); break;
        case "Escape":
          handlers.onEsc?.(); break;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handlers]);
}

export function useAutoHide(timeoutMs = 3000) {
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onMove = () => {
      setVisible(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setVisible(false), timeoutMs);
    };
    onMove();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchstart", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchstart", onMove);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [timeoutMs]);

  return visible;
}
