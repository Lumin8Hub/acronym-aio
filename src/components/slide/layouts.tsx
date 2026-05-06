import type { ReactNode } from "react";
import { AMark, EdgeStrip, FooterChrome, GradientRule, SectionPill } from "./primitives";

export const TOTAL = 20;

export type SlideProps = { slideNumber: number };

export function SlideFrame({
  slideNumber,
  background = "bg-bg",
  showEdgeStrip = true,
  showFooter = true,
  children,
}: {
  slideNumber: number;
  background?: string;
  showEdgeStrip?: boolean;
  showFooter?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${background}`}>
      {children}
      {showEdgeStrip && <EdgeStrip />}
      {showFooter && <FooterChrome slideNumber={slideNumber} total={TOTAL} />}
    </div>
  );
}

/* Layout B — Section Divider (full-bleed colour) */
export function DividerLayout({
  slideNumber,
  bgClass,
  markColorClass,
  eyebrow,
  titleLight,
  titleBold,
  bullets = [],
  textColorClass = "text-white",
  subTextColorClass = "text-white/85",
  ghostMarks = false,
  cta,
  visualOverlay,
}: {
  slideNumber: number;
  bgClass: string;
  markColorClass: string;
  eyebrow?: string;
  titleLight: string;
  titleBold: string;
  bullets?: string[];
  textColorClass?: string;
  subTextColorClass?: string;
  ghostMarks?: boolean;
  cta?: ReactNode;
  visualOverlay?: ReactNode;
}) {
  return (
    <SlideFrame slideNumber={slideNumber} background={bgClass} showEdgeStrip={false}>
      {/* Oversized A-mark left */}
      <div className={`absolute left-[-40px] top-[5%] bottom-[5%] flex items-center ${markColorClass}`}>
        <AMark style={{ height: "70%", width: "auto" }} />
      </div>

      {/* Optional ghost A-marks scattered behind */}
      {ghostMarks && (
        <div className="absolute inset-0 pointer-events-none">
          {[
            { left: "8%", top: "12%", size: 110, opacity: 0.08 },
            { left: "30%", top: "8%", size: 80, opacity: 0.06 },
            { left: "44%", top: "60%", size: 120, opacity: 0.07 },
            { left: "18%", top: "70%", size: 90, opacity: 0.08 },
            { left: "55%", top: "20%", size: 70, opacity: 0.06 },
            { left: "5%", top: "82%", size: 60, opacity: 0.07 },
          ].map((g, i) => (
            <div
              key={i}
              className={markColorClass}
              style={{
                position: "absolute",
                left: g.left,
                top: g.top,
                width: g.size,
                height: g.size,
                opacity: g.opacity,
              }}
            >
              <AMark style={{ width: "100%", height: "100%" }} />
            </div>
          ))}
        </div>
      )}

      {visualOverlay}

      {/* Right title block */}
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 right-[6%] max-w-[46%]">
        {eyebrow && (
          <div className={`font-display font-semibold text-[12px] tracking-[0.28em] uppercase ${subTextColorClass} mb-4`}>
            {eyebrow}
          </div>
        )}
        <h1 className={`font-display font-light text-[56px] leading-[0.95] tracking-[0.04em] uppercase ${textColorClass}`}>
          {titleLight}{" "}
          <span className="font-bold">{titleBold}</span>
        </h1>
        <div className="mt-8">
          <GradientRule width="80%" height={5} />
        </div>
        {bullets.length > 0 && (
          <ul className={`mt-8 space-y-3 ${subTextColorClass}`}>
            {bullets.map((b, i) => (
              <li key={i} className="font-display font-medium text-[15px] tracking-[0.02em] flex gap-3">
                <span className="opacity-50">—</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        {cta && <div className="mt-10">{cta}</div>}
      </div>
    </SlideFrame>
  );
}

/* Layout C — Content (text left, visual right) */
export function ContentLayout({
  slideNumber,
  sectionPill,
  titleLight,
  titleBold,
  subHeader,
  bullets = [],
  visual,
  visualBg = "bg-paper",
}: {
  slideNumber: number;
  sectionPill?: string;
  titleLight: string;
  titleBold: string;
  subHeader?: string;
  bullets?: { head: string; body: string }[];
  visual: ReactNode;
  visualBg?: string;
}) {
  return (
    <SlideFrame slideNumber={slideNumber}>
      {sectionPill && <SectionPill>{sectionPill}</SectionPill>}
      <div className="absolute inset-0 grid grid-cols-[1.15fr_0.95fr]">
        {/* LEFT */}
        <div className="px-20 pt-24 pb-20 flex flex-col">
          <h1 className="font-display font-light text-[52px] leading-[1.0] tracking-[0.04em] uppercase text-teal-900">
            {titleLight}{" "}
            <span className="font-bold">{titleBold}</span>
          </h1>
          {subHeader && (
            <div className="mt-3 font-display font-bold text-[19px] text-teal-800 tracking-[0.01em]">
              {subHeader}
            </div>
          )}
          <div className="mt-7">
            <GradientRule width="100%" height={4} />
          </div>
          <ul className="mt-9 space-y-5">
            {bullets.map((b, i) => (
              <li key={i}>
                <div className="font-display font-bold text-[15px] text-teal-900 tracking-[0.02em]">
                  {b.head}
                </div>
                <div className="mt-1 text-[14px] text-teal-800 leading-[1.5] max-w-[52ch]">
                  {b.body}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className={`relative ${visualBg} overflow-hidden`}>
          {visual}
          <div className="absolute right-[-30px] bottom-[-30px] text-lime opacity-95 pointer-events-none">
            <AMark className="w-[260px] h-[260px]" />
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* Layout D — Stat / Visual centerpiece */
export function CenterpieceLayout({
  slideNumber,
  sectionPill,
  titleLight,
  titleBold,
  subtitle,
  children,
  background = "bg-bg",
  caption,
}: {
  slideNumber: number;
  sectionPill?: string;
  titleLight: string;
  titleBold: string;
  subtitle?: string;
  children: ReactNode;
  background?: string;
  caption?: string;
}) {
  return (
    <SlideFrame slideNumber={slideNumber} background={background} showEdgeStrip={false}>
      {sectionPill && <SectionPill>{sectionPill}</SectionPill>}
      <div className="absolute inset-0 px-20 pt-20 pb-20 flex flex-col">
        <h1 className="font-display font-light text-[52px] leading-[1.0] tracking-[0.04em] uppercase text-teal-900">
          {titleLight}{" "}
          <span className="font-bold">{titleBold}</span>
        </h1>
        {subtitle && (
          <div className="mt-3 font-display font-bold text-[19px] text-teal-800">{subtitle}</div>
        )}
        <div className="mt-6">
          <GradientRule width="100%" height={4} />
        </div>
        <div className="flex-1 mt-8 min-h-0">{children}</div>
        {caption && (
          <div className="mt-4 text-[11px] tracking-[0.12em] uppercase text-muted font-mono">
            {caption}
          </div>
        )}
      </div>
    </SlideFrame>
  );
}
