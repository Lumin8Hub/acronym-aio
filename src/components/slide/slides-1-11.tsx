import { Fragment } from "react";
import {
  HelpCircle, Tag, FileText, Sparkles, Database, Globe, Target, CheckCircle2,
  Landmark, Wifi, Network, LineChart,
} from "lucide-react";
import { AMark, EdgeStrip, FooterChrome, GradientRule, Wordmark } from "./primitives";
import { ContentLayout, DividerLayout, CenterpieceLayout, SlideFrame, type SlideProps } from "./layouts";
import { FunnelDiagram, SectorPillar } from "./parts";

/* ─── Slide 01 — Title (Layout A) ───────────────────────────────────────── */
export function Slide01({ slideNumber }: SlideProps) {
  return (
    <SlideFrame slideNumber={slideNumber} background="bg-paper" showEdgeStrip={false}>
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="px-20 flex flex-col justify-center">
          <div className="font-display font-semibold text-[12px] tracking-[0.28em] uppercase text-magenta mb-10 flex items-center gap-3">
            <span className="w-7 h-[2px] bg-current" />
            <span>AIO Strategy 2.0 · Q2 2026</span>
          </div>
          <Wordmark className="mb-10" />
          <h1 className="font-display font-light text-[56px] leading-[0.96] tracking-[0.03em] uppercase text-teal-900">
            Acronym AIO Strategy 2.0:
            <br />
            <span className="font-bold">From content to AI-driven revenue engine.</span>
          </h1>
          <p className="mt-8 text-[18px] text-teal-800 max-w-[42ch] leading-[1.5]">
            Sector-specific growth powered by Utopica + AI systems.
          </p>
          <div className="mt-12">
            <GradientRule width="62%" height={14} />
          </div>
        </div>
        <div className="relative">
          <NodeNetwork />
        </div>
      </div>
      <EdgeStrip />
      <FooterChrome slideNumber={slideNumber} total={20} />
    </SlideFrame>
  );
}

function NodeNetwork() {
  const nodes = [
    { x: 30, y: 25 }, { x: 70, y: 18 }, { x: 50, y: 40 }, { x: 82, y: 45 },
    { x: 22, y: 55 }, { x: 60, y: 65 }, { x: 38, y: 78 }, { x: 78, y: 80 },
    { x: 92, y: 30 }, { x: 12, y: 38 },
  ];
  const edges: [number, number][] = [[0,2],[1,2],[2,3],[2,5],[4,5],[5,6],[5,7],[3,7],[1,8],[0,9],[4,9],[6,7]];
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 w-full h-full">
      {edges.map(([a, b], i) => (
        <line key={`e${i}`} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="#022C37" strokeWidth="0.15" strokeOpacity="0.25" />
      ))}
      {nodes.map((n, i) => {
        const isCyan = i % 3 === 0;
        const isMag = i % 5 === 0;
        const fill = isCyan ? "#00FFFF" : isMag ? "#65038E" : "#022C37";
        const r = isCyan || isMag ? 1.2 : 0.7;
        return (
          <g key={`n${i}`}>
            <circle cx={n.x} cy={n.y} r={r} fill={fill}>
              {(isCyan || isMag) && (
                <animate attributeName="r" values={`${r};${r * 1.8};${r}`} dur={`${4 + i * 0.3}s`} repeatCount="indefinite" />
              )}
            </circle>
            {(isCyan || isMag) && (
              <circle cx={n.x} cy={n.y} r={r * 2.2} fill={fill} fillOpacity="0.15">
                <animate attributeName="r" values={`${r * 2.2};${r * 4};${r * 2.2}`} dur={`${4 + i * 0.3}s`} repeatCount="indefinite" />
                <animate attributeName="fill-opacity" values="0.15;0;0.15" dur={`${4 + i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            )}
          </g>
        );
      })}
    </svg>
  );
}

/* ─── Slide 02 — The Shift (Layout D) ───────────────────────────────────── */
export function Slide02({ slideNumber }: SlideProps) {
  return (
    <CenterpieceLayout
      slideNumber={slideNumber}
      sectionPill="The Shift"
      titleLight="From SEO to"
      titleBold="AI discovery."
      subtitle="Search is evolving. Visibility is being redefined."
      caption="SERP — Search Engine Results Page"
    >
      <div className="flex flex-col gap-7 h-full">
        <div>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted mb-3">
            Traditional Search
          </div>
          <FunnelDiagram
            nodes={[
              { label: "Search Query" },
              { label: "SERP" },
              { label: "Click" },
              { label: "Website" },
              { label: "Vendor" },
            ]}
            finalLime={false}
            arrowColor="#65038E"
          />
        </div>
        <div>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase mb-3 text-teal-900">
            <span className="inline-block w-2 h-2 bg-lime mr-2 align-middle" />
            AI-Driven Discovery
          </div>
          <div className="w-full flex items-stretch gap-1">
            {[
              { label: "Buyer Question" },
              { label: "AI System" },
              { label: "Curated Answer" },
              { label: "Recommended Vendor", final: true },
            ].map((n, i, arr) => (
              <Fragment key={i}>
                <div
                  className="flex-1 flex items-center justify-center border border-teal-900 px-3 py-4 text-center"
                  style={{ background: n.final ? "#CFFF1D" : "rgba(207,255,29,0.18)" }}
                >
                  <div className="font-display font-bold text-[12px] tracking-[0.10em] uppercase text-teal-900">
                    {n.label}
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <svg width="22" height="32" viewBox="0 0 22 32" className="flex-shrink-0 self-center">
                    <path d="M4 4 L16 16 L4 28" fill="none" stroke="#65038E" strokeWidth="3" strokeLinecap="square" />
                  </svg>
                )}
              </Fragment>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-2 pt-5 border-t border-line">
          {[
            ["AI-generated answers", "are replacing traditional SERPs"],
            ["Visibility now depends on LLM ingestion", "— not just rankings"],
            ["Buyers discover vendors", "through AI-generated responses"],
          ].map(([head, body], i) => (
            <div key={i}>
              <div className="font-display font-bold text-[14px] text-teal-900 leading-snug">{head}</div>
              <div className="text-[13px] text-teal-800 mt-1">{body}</div>
            </div>
          ))}
        </div>
      </div>
    </CenterpieceLayout>
  );
}

/* ─── Slide 03 — The Core Problem (Layout C) ────────────────────────────── */
export function Slide03({ slideNumber }: SlideProps) {
  return (
    <ContentLayout
      slideNumber={slideNumber}
      sectionPill="The Problem"
      titleLight="Content alone"
      titleBold="doesn't close deals."
      subHeader="Where the current marketing approach falls short."
      bullets={[
        { head: "Over-indexed on content as output", body: "Production volume isn't a strategy." },
        { head: "Underdeveloped connection to revenue", body: "No clear path from impression to pipeline." },
        { head: "Not structured around target sectors", body: "Horizontal positioning dilutes vertical authority." },
        { head: "Missing AI-driven sales + personalization layers", body: "Buyers expect tailored experiences." },
      ]}
      visual={<GapsDiagram />}
    />
  );
}

function GapsDiagram() {
  return (
    <div className="absolute inset-0 px-10 pt-16 pb-32 flex flex-col">
      <div className="flex items-center gap-3">
        {[
          { label: "Content", filled: true },
          { label: "???", missing: true },
          { label: "Revenue", filled: true },
        ].map((p, i, arr) => (
          <Fragment key={i}>
            <div
              className={`flex-1 h-[60px] flex items-center justify-center font-display font-bold text-[13px] tracking-[0.14em] uppercase ${
                p.missing
                  ? "border-2 border-dashed border-magenta text-magenta"
                  : "bg-teal-900 text-white border border-teal-900"
              }`}
            >
              {p.label}
            </div>
            {i < arr.length - 1 && <div className="w-3 h-[1px] bg-teal-900/30" />}
          </Fragment>
        ))}
      </div>
      <div className="mt-10 flex-1">
        <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted mb-3">
          Missing Layers
        </div>
        <div className="grid grid-cols-2 gap-3">
          {["AI Discovery", "Personalization", "Intent Data", "Sales Automation"].map((l) => (
            <div
              key={l}
              className="border border-dashed border-line bg-white/40 px-4 py-3 text-[12px] tracking-[0.06em] uppercase text-muted font-display font-semibold"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 04 — Strategic Reframe (Layout B — Magenta) ─────────────────── */
export function Slide04({ slideNumber }: SlideProps) {
  return (
    <DividerLayout
      slideNumber={slideNumber}
      bgClass="bg-magenta"
      markColorClass="text-cyan"
      eyebrow="The Reframe"
      titleLight="We are not doing SEO."
      titleBold="We are training AI to recommend us."
      bullets={[
        "Build authority inside AI systems",
        "Align content with high-value queries",
        "Convert visibility into pipeline",
      ]}
      visualOverlay={
        <div className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 w-full h-full">
            {[
              [18, 22], [32, 18], [12, 38], [42, 30], [25, 50], [38, 60],
              [52, 22], [58, 50], [22, 70], [40, 80], [55, 75], [10, 60],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={0.6} fill="#00FFFF" opacity="0.6">
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur={`${3 + (i % 4)}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </svg>
        </div>
      }
    />
  );
}

/* ─── Slide 05 — Utopica Foundation (Layout C) ──────────────────────────── */
export function Slide05({ slideNumber }: SlideProps) {
  return (
    <ContentLayout
      slideNumber={slideNumber}
      sectionPill="The Foundation"
      titleLight="Utopica is the"
      titleBold="foundation layer."
      subHeader="A structured content engine — not just a writing tool."
      bullets={[
        { head: "Built for LLM ingestion", body: "Every page parses cleanly for AI systems." },
        { head: "Semantic relationships", body: "Topics, entities, and questions linked by design." },
        { head: "Question-based discovery", body: "Content engineered around buyer queries." },
        { head: "Optimized for both AIO + SEO", body: "Wins in AI answers and traditional rankings." },
      ]}
      visual={<UtopicaContentChain />}
    />
  );
}

function UtopicaContentChain() {
  const steps = [
    { label: "Questions", Icon: HelpCircle, color: "#65038E" },
    { label: "Entities", Icon: Tag, color: "#1B2D5B" },
    { label: "Answers", Icon: FileText, color: "#135264" },
    { label: "AI Pickup", Icon: Sparkles, color: "#022C37" },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center px-12 py-20">
      <div className="flex flex-col gap-3 w-full max-w-[280px]">
        {steps.map(({ label, Icon, color }, i) => (
          <Fragment key={label}>
            <div className="flex items-center gap-4 bg-white border border-line p-3.5">
              <div className="w-10 h-10 flex items-center justify-center text-white flex-shrink-0" style={{ background: color }}>
                <Icon size={20} strokeWidth={2} />
              </div>
              <div className="font-display font-bold text-[13px] tracking-[0.08em] uppercase text-teal-900">
                {label}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="self-center w-[1px] h-3 bg-teal-900/40 relative">
                <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-[6px] border-l-transparent border-r-transparent border-t-teal-900/40" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

/* ─── Slide 06 — How Utopica Wins (Layout C) ────────────────────────────── */
export function Slide06({ slideNumber }: SlideProps) {
  return (
    <ContentLayout
      slideNumber={slideNumber}
      sectionPill="The Mechanism"
      titleLight="Engineered"
      titleBold="to be cited."
      subHeader="Content formatted for the way AI systems actually read."
      bullets={[
        { head: "Query matching", body: "Direct alignment with how buyers ask questions." },
        { head: "Topic clustering", body: "Authority signals across related concepts." },
        { head: "AI readability", body: "Structure LLMs prefer to surface." },
        { head: "Dual outcome", body: "Higher likelihood of being cited and surfaced." },
      ]}
      visual={
        <div className="absolute inset-0 px-10 py-16 flex flex-col gap-5 justify-center">
          <div className="bg-white border border-teal-900 p-4 max-w-[80%]">
            <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted mb-2">Query</div>
            <div className="text-[13px] text-teal-900 italic">
              "Best fiber provider for Ontario utilities?"
            </div>
          </div>
          <div className="self-center text-cyan">
            <AMark className="w-16 h-16" />
          </div>
          <div className="bg-white border border-teal-900 p-4 self-end max-w-[88%]">
            <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted mb-2">AI Answer</div>
            <div className="text-[13px] text-teal-800 leading-snug">
              For Ontario utility infrastructure,{" "}
              <span className="bg-lime/60 px-1 text-teal-900 font-bold">Acronym</span>{" "}
              provides carrier-grade fiber routes.
            </div>
            <div className="mt-3">
              <span className="inline-block px-2.5 py-0.5 border border-teal-900 text-teal-900 font-display font-bold text-[9px] tracking-[0.18em] uppercase rounded-full">
                Acronym
              </span>
            </div>
          </div>
        </div>
      }
    />
  );
}

/* ─── Slide 07 — Sector-Based Strategy (Layout B — Cyan) ────────────────── */
export function Slide07({ slideNumber }: SlideProps) {
  return (
    <DividerLayout
      slideNumber={slideNumber}
      bgClass="bg-cyan"
      markColorClass="text-navy"
      eyebrow="The Strategic Shift"
      titleLight="From horizontal"
      titleBold="to verticalized."
      bullets={[
        "Content + sales aligned by industry",
        "Authority earned sector by sector",
        "Pipeline converted, not just attention captured",
      ]}
      textColorClass="text-teal-900"
      subTextColorClass="text-teal-900/85"
      visualOverlay={
        <div className="absolute left-[6%] right-[6%] bottom-[8%] pointer-events-none">
          <div className="h-[2px] bg-teal-900 w-full" />
          <div className="flex justify-between mt-4">
            {["Energy", "Public", "ISP", "Wholesale", "Capital"].map((s) => (
              <div key={s} className="flex flex-col items-center">
                <div className="w-[1px] h-4 bg-teal-900" />
                <span className="mt-2 inline-block px-3 py-1 bg-navy text-white font-display font-bold text-[10px] tracking-[0.16em] uppercase">
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}

/* ─── Slide 08 — Energy & Utilities (Layout C) ──────────────────────────── */
export function Slide08({ slideNumber }: SlideProps) {
  const hubs = [
    { x: 50, y: 70, name: "Toronto" },
    { x: 65, y: 60, name: "Ottawa" },
    { x: 42, y: 75, name: "London" },
    { x: 55, y: 45, name: "Sudbury" },
    { x: 25, y: 35, name: "Thunder Bay" },
  ];
  return (
    <ContentLayout
      slideNumber={slideNumber}
      sectionPill="Priority Sector 01"
      titleLight="Energy"
      titleBold="& Utilities."
      subHeader="Our primary focus. Highest infrastructure dependency. Most aligned content."
      bullets={[
        { head: "Ontario-based utilities", body: "Direct geographic alignment with our network." },
        { head: "High infrastructure dependency", body: "Mission-critical connectivity needs." },
        { head: "Content alignment", body: "Majority of existing Utopica content lives here." },
        { head: "Sales readiness", body: "Field team already operational in this segment." },
      ]}
      visual={
        <div className="absolute inset-0 p-8">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <path
              d="M10,40 L20,30 L35,28 L50,32 L60,28 L72,35 L78,42 L75,55 L68,68 L58,78 L48,80 L38,78 L28,72 L18,62 L12,52 Z"
              fill="rgba(19,82,100,0.08)"
              stroke="#135264"
              strokeWidth="0.6"
            />
            {hubs.map((h, i) => (
              hubs.slice(i + 1).map((h2, j) => (
                <line key={`${i}-${j}`} x1={h.x} y1={h.y} x2={h2.x} y2={h2.y}
                  stroke="url(#fiber-grad)" strokeWidth="0.4" strokeOpacity="0.55" />
              ))
            ))}
            <defs>
              <linearGradient id="fiber-grad" x1="0" x2="1">
                <stop offset="0%" stopColor="#00E0FF" />
                <stop offset="100%" stopColor="#CFFF1D" />
              </linearGradient>
            </defs>
            {hubs.map((h) => (
              <g key={h.name}>
                <circle cx={h.x} cy={h.y} r="2" fill="#CFFF1D" stroke="#022C37" strokeWidth="0.4" />
                <text x={h.x + 3} y={h.y + 1} fontSize="2.6" fill="#022C37" fontFamily="Barlow" fontWeight="700">
                  {h.name}
                </text>
              </g>
            ))}
          </svg>
        </div>
      }
    />
  );
}

/* ─── Slide 09 — Priority Sectors 02–05 (Layout D) ──────────────────────── */
export function Slide09({ slideNumber }: SlideProps) {
  return (
    <CenterpieceLayout
      slideNumber={slideNumber}
      sectionPill="Priority Sectors 02–05"
      titleLight="Four"
      titleBold="follow-on verticals."
      subtitle="Sequenced by content readiness and sales alignment."
    >
      <div className="grid grid-cols-4 gap-4 h-full">
        <SectorPillar
          index="02" name="Public Sector" icon={Landmark} accent="#CFFF1D"
          bullets={["Federal departments", "Provincial agencies", "Municipal infrastructure"]}
        />
        <SectorPillar
          index="03" name="ISPs" icon={Wifi} accent="#00B8B8"
          bullets={["Independent of Bell, Rogers, Telus", "Wholesale connectivity needs", "Regional coverage gaps"]}
        />
        <SectorPillar
          index="04" name="Wholesale & Resellers" icon={Network} accent="#65038E"
          bullets={["Carrier-of-carriers offers", "Capacity resale partners", "White-label fiber routes"]}
        />
        <SectorPillar
          index="05" name="Capital Markets" icon={LineChart} accent="#1B2D5B"
          bullets={["Toronto Stock Exchange", "New York Stock Exchange", "Low-latency requirements"]}
        />
      </div>
    </CenterpieceLayout>
  );
}

/* ─── Slide 10 — Competitive Advantage (Layout C) ───────────────────────── */
export function Slide10({ slideNumber }: SlideProps) {
  return (
    <ContentLayout
      slideNumber={slideNumber}
      sectionPill="The Advantage"
      titleLight="Built for"
      titleBold="mission-critical."
      subHeader="A position no residential carrier can match."
      bullets={[
        { head: "No residential competition", body: "Pure-play B2B focus." },
        { head: "B2B infrastructure focus", body: "Enterprise-grade by default." },
        { head: "High-performance fiber routes", body: "Ontario → New Jersey, Sarnia, Chicago (emerging)." },
        { head: "Mission-critical uptime", body: "Carrier-grade SLAs across the footprint." },
      ]}
      visual={
        <div className="absolute inset-0 p-6">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="route-grad" x1="0" x2="1">
                <stop offset="0%" stopColor="#00E0FF" />
                <stop offset="50%" stopColor="#7A3F9F" />
                <stop offset="100%" stopColor="#CFFF1D" />
              </linearGradient>
            </defs>
            <path
              d="M5,40 L20,30 L35,28 L50,32 L65,28 L80,38 L88,50 L82,65 L70,75 L55,80 L40,78 L25,72 L10,55 Z"
              fill="rgba(19,82,100,0.06)" stroke="#135264" strokeWidth="0.5"
            />
            {/* Routes */}
            <line x1="42" y1="58" x2="62" y2="55" stroke="url(#route-grad)" strokeWidth="1.4" />
            <line x1="42" y1="58" x2="35" y2="62" stroke="url(#route-grad)" strokeWidth="1.4" />
            <line x1="42" y1="58" x2="78" y2="40" stroke="url(#route-grad)" strokeWidth="1.4" strokeDasharray="2,1.5" />
            {[
              { x: 42, y: 58, n: "Ontario" },
              { x: 35, y: 62, n: "Sarnia" },
              { x: 62, y: 55, n: "New Jersey" },
              { x: 78, y: 40, n: "Chicago" },
            ].map((c) => (
              <g key={c.n}>
                <circle cx={c.x} cy={c.y} r="1.6" fill="#022C37" />
                <text x={c.x + 2.5} y={c.y - 1} fontSize="2.6" fill="#022C37" fontFamily="Barlow" fontWeight="700">
                  {c.n}
                </text>
              </g>
            ))}
            {[
              { x: 50, y: 50, t: "<2ms" },
              { x: 53, y: 64, t: "<8ms" },
              { x: 70, y: 46, t: "<14ms" },
            ].map((p, i) => (
              <g key={i}>
                <rect x={p.x - 4.5} y={p.y - 1.8} width="9" height="3.6" fill="#CFFF1D" stroke="#022C37" strokeWidth="0.2" rx="1.8" />
                <text x={p.x} y={p.y + 0.7} fontSize="2.2" fill="#022C37" fontFamily="JetBrains Mono" fontWeight="500" textAnchor="middle">
                  {p.t}
                </text>
              </g>
            ))}
          </svg>
        </div>
      }
    />
  );
}

/* ─── Slide 11 — AIO Revenue Engine (Layout D) ──────────────────────────── */
export function Slide11({ slideNumber }: SlideProps) {
  return (
    <CenterpieceLayout
      slideNumber={slideNumber}
      sectionPill="The Engine"
      titleLight="The"
      titleBold="AIO revenue engine."
      subtitle="Five connected stages. One end-to-end pipeline."
    >
      <div className="h-full flex items-center">
        <FunnelDiagram
          nodes={[
            { label: "Utopica", icon: Database, caption: "Structured content" },
            { label: "AI Discovery", icon: Sparkles, caption: "LLM citations" },
            { label: "Website", icon: Globe, caption: "Personalized landing" },
            { label: "Sales Trigger", icon: Target, caption: "Account scoring" },
            { label: "Deal", icon: CheckCircle2, caption: "Closed-won" },
          ]}
        />
      </div>
    </CenterpieceLayout>
  );
}
