import { Fragment } from "react";
import {
  Database, Globe, Target, CheckCircle2, Sparkles, Search, MessageSquare,
  Calendar, Mail, Image as ImageIcon, Video, Newspaper, Megaphone, Layout,
} from "lucide-react";
import { AMark } from "./primitives";
import { ContentLayout, DividerLayout, CenterpieceLayout, type SlideProps } from "./layouts";
import { FeatureRow, MetricCard, StackDiagram, CtaButton, Chip, FunnelDiagram } from "./parts";

/* ─── Slide 12 — Dynamic Website Layer (Layout C) ───────────────────────── */
export function Slide12({ slideNumber }: SlideProps) {
  const variants = [
    { tag: "Energy", line: "Carrier-grade fiber for Ontario utilities." },
    { tag: "Public Sector", line: "Mission-critical networks for government." },
    { tag: "Capital Markets", line: "Sub-millisecond routes, Toronto to New York." },
  ];
  return (
    <ContentLayout
      slideNumber={slideNumber}
      sectionPill="Layer 02 · Website"
      titleLight="One site,"
      titleBold="4 sectors."
      subHeader="Real-time personalization by industry, identity, and behavior."
      bullets={[
        { head: "Dynamic headlines", body: "Lead message changes per visitor segment." },
        { head: "Dynamic case studies", body: "Surface the most relevant proof." },
        { head: "Dynamic CTAs", body: "Route to the right sales motion." },
        { head: "Signals used", body: "Industry, visitor identity, behavior." },
      ]}
      visual={
        <div className="absolute inset-0 flex items-center justify-center px-6 py-16">
          <div className="relative w-[80%] h-[78%]">
            {variants.map((v, i) => {
              const isFront = i === 0;
              const offset = i * 18;
              const rot = -2 + i * 2;
              return (
                <div
                  key={v.tag}
                  className="absolute inset-0 bg-white border-2 border-teal-900"
                  style={{
                    transform: `translate(${offset}px, ${offset}px) rotate(${rot}deg)`,
                    zIndex: variants.length - i,
                  }}
                >
                  {isFront && (
                    <div className="absolute -top-3 -right-3 bg-lime text-teal-900 px-3 py-1 font-display font-bold text-[10px] tracking-[0.16em] uppercase">
                      {v.tag}
                    </div>
                  )}
                  <div className="h-7 border-b border-line bg-paper flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-teal-900/40" />
                    <div className="w-2 h-2 rounded-full bg-teal-900/40" />
                    <div className="w-2 h-2 rounded-full bg-teal-900/40" />
                  </div>
                  <div className="p-5">
                    <div className="font-display font-bold text-[14px] text-teal-900 leading-tight">
                      {v.line}
                    </div>
                    <div className="mt-3 h-1 bg-spectrum w-1/2" />
                    <div className="mt-4 space-y-1.5">
                      <div className="h-1.5 bg-line w-full" />
                      <div className="h-1.5 bg-line w-[85%]" />
                      <div className="h-1.5 bg-line w-[70%]" />
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="h-10 bg-paper border border-line" />
                      <div className="h-10 bg-paper border border-line" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      }
    />
  );
}

/* ─── Slide 13 — Intent + Data Layer (Layout C) ─────────────────────────── */
export function Slide13({ slideNumber }: SlideProps) {
  const accounts = [
    { name: "Northridge Energy", sector: "ENERGY", score: 92, status: "HOT", hot: true },
    { name: "Confidential Inc.", sector: "PUBLIC", score: 78, status: "HOT" },
    { name: "Meridian Telecom", sector: "ISP", score: 61, status: "WARM" },
    { name: "Beacon Capital", sector: "CAPITAL", score: 44, status: "WATCH" },
  ];
  return (
    <ContentLayout
      slideNumber={slideNumber}
      sectionPill="Layer 03 · Data"
      titleLight="Know who's"
      titleBold="actually buying."
      subHeader="Identify, score, and route in real time."
      bullets={[
        { head: "Identify visitors", body: "Company-level identification from anonymous traffic." },
        { head: "Track engagement signals", body: "Pages, time, depth, return visits." },
        { head: "Score accounts automatically", body: "AI ranks fit + intent in real time." },
        { head: "Route the hot ones", body: "Trigger sales motion when score crosses threshold." },
      ]}
      visual={
        <div className="absolute inset-0 px-8 py-14 flex flex-col">
          <div className="bg-white border border-teal-900 flex-1 flex flex-col">
            <div className="px-5 py-3 border-b border-line bg-paper flex items-baseline justify-between">
              <div className="font-display font-bold text-[12px] tracking-[0.18em] uppercase text-teal-900">
                Accounts This Week
              </div>
              <div className="font-mono text-[10px] text-muted">LIVE</div>
            </div>
            <div className="flex-1 overflow-hidden">
              {accounts.map((a, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-3 border-b border-line text-[12px]"
                  style={a.hot ? { borderLeft: "4px solid #CFFF1D" } : { borderLeft: "4px solid transparent" }}
                >
                  <div className="flex-1 font-display font-bold text-teal-900 truncate">{a.name}</div>
                  <span className="text-[9px] tracking-[0.14em] uppercase font-bold text-teal-700 bg-paper px-2 py-0.5 rounded-full">
                    {a.sector}
                  </span>
                  <div className="w-20 h-2 bg-paper relative">
                    <div className="absolute inset-y-0 left-0 bg-spectrum" style={{ width: `${a.score}%` }} />
                  </div>
                  <div className="font-mono text-teal-900 w-7 text-right">{a.score}</div>
                  <span
                    className="text-[9px] tracking-[0.14em] uppercase font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background:
                        a.status === "HOT" ? "#CFFF1D" :
                        a.status === "WARM" ? "#FFC857" : "#E1E1DE",
                      color: "#022C37",
                    }}
                  >
                    {a.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}

/* ─── Slide 14 — Sales Acceleration (Layout C) ──────────────────────────── */
export function Slide14({ slideNumber }: SlideProps) {
  return (
    <ContentLayout
      slideNumber={slideNumber}
      sectionPill="Layer 04 · Sales"
      titleLight="Sellers,"
      titleBold="amplified."
      subHeader="AI tools that compress the cycle and lift the win rate."
      bullets={[
        { head: "Automated prospecting", body: "Account research and list-building at scale." },
        { head: "Personalized outreach", body: "Sequenced messaging tuned per buyer." },
        { head: "AI-driven follow-ups", body: "Right cadence, right context, right channel." },
        { head: "Deal intelligence + coaching", body: "Conversation analysis surfacing what works." },
      ]}
      visual={
        <div className="absolute inset-0 flex items-center px-8 py-16">
          <div className="w-full">
            <FunnelDiagram
              nodes={[
                { label: "Lead", icon: Search, caption: "find" },
                { label: "AI Enrichment", icon: Sparkles, caption: "context" },
                { label: "Outreach", icon: MessageSquare, caption: "engage" },
                { label: "Meeting", icon: Calendar, caption: "convert" },
              ]}
            />
          </div>
        </div>
      }
    />
  );
}

/* ─── Slide 15 — Creative Engine (Layout C) ─────────────────────────────── */
export function Slide15({ slideNumber }: SlideProps) {
  const outputs = [
    { label: "Video", Icon: Video },
    { label: "LinkedIn Post", Icon: MessageSquare },
    { label: "Carousel", Icon: ImageIcon },
    { label: "Newsletter", Icon: Newspaper },
    { label: "Ad Creative", Icon: Megaphone },
    { label: "Email", Icon: Mail },
  ];
  return (
    <ContentLayout
      slideNumber={slideNumber}
      sectionPill="Layer 05 · Creative"
      titleLight="One asset,"
      titleBold="infinite outputs."
      subHeader="Scale production. Cut cycle time. Repurpose without rewriting."
      bullets={[
        { head: "Scale across formats", body: "Blogs, graphics, video, all from a single source." },
        { head: "Reduce production time", body: "Hours, not weeks, from concept to publish." },
        { head: "Repurpose across channels", body: "One narrative, every surface." },
        { head: "Compound the back catalog", body: "Old content, refreshed and resurfaced." },
      ]}
      visual={
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[420px] h-[360px]">
            <svg viewBox="0 0 420 360" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="rad-grad" x1="0" x2="1">
                  <stop offset="0%" stopColor="#00E0FF" />
                  <stop offset="100%" stopColor="#CFFF1D" />
                </linearGradient>
              </defs>
              {outputs.map((_, i) => {
                const angle = (i / outputs.length) * Math.PI * 2 - Math.PI / 2;
                const x = 210 + Math.cos(angle) * 150;
                const y = 180 + Math.sin(angle) * 130;
                return (
                  <line
                    key={i}
                    x1="210" y1="180" x2={x} y2={y}
                    stroke="url(#rad-grad)" strokeWidth="1.2" strokeOpacity="0.6"
                  />
                );
              })}
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-900 text-white px-5 py-4 text-center min-w-[110px]">
              <Layout size={20} className="mx-auto mb-1.5" strokeWidth={2} />
              <div className="font-display font-bold text-[12px] tracking-[0.16em] uppercase">Blog</div>
            </div>
            {outputs.map(({ label, Icon }, i) => {
              const angle = (i / outputs.length) * Math.PI * 2 - Math.PI / 2;
              const x = 210 + Math.cos(angle) * 150;
              const y = 180 + Math.sin(angle) * 130;
              return (
                <div
                  key={label}
                  className="absolute flex flex-col items-center bg-white border border-teal-900 px-2.5 py-1.5"
                  style={{
                    left: x, top: y,
                    transform: "translate(-50%, -50%)",
                    minWidth: 84,
                  }}
                >
                  <Icon size={16} className="text-teal-900" strokeWidth={2} />
                  <div className="mt-1 font-display font-bold text-[10px] tracking-[0.10em] uppercase text-teal-900 text-center leading-tight">
                    {label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      }
    />
  );
}

/* ─── Slide 16 — Agentic AI (Layout C) ──────────────────────────────────── */
export function Slide16({ slideNumber }: SlideProps) {
  const steps = ["Observe", "Decide", "Act", "Learn"];
  return (
    <ContentLayout
      slideNumber={slideNumber}
      sectionPill="Layer 06 · Autonomy"
      titleLight="Systems that"
      titleBold="run themselves."
      subHeader="The next layer — agentic AI executes workflows end-to-end."
      bullets={[
        { head: "AI runs workflows end-to-end", body: "From signal to outreach without human handoff." },
        { head: "Campaigns self-optimize", body: "Budget and creative reallocate based on performance." },
        { head: "Outreach adapts automatically", body: "Cadence, channel, and content tuned per response." },
        { head: "Real-time targeting", body: "Audiences refined as new data arrives." },
      ]}
      visual={
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[340px] h-[340px]">
            <svg viewBox="0 0 340 340" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="loop-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00E0FF" />
                  <stop offset="50%" stopColor="#7A3F9F" />
                  <stop offset="100%" stopColor="#CFFF1D" />
                </linearGradient>
                <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M0,0 L10,5 L0,10 Z" fill="#CFFF1D" />
                </marker>
              </defs>
              <circle
                cx="170" cy="170" r="130"
                fill="none" stroke="url(#loop-grad)" strokeWidth="2.5"
                strokeDasharray="780 30" markerEnd="url(#arrow)"
                transform="rotate(-90 170 170)"
              />
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan">
              <AMark className="w-16 h-16" />
            </div>
            {steps.map((s, i) => {
              const angle = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
              const x = 170 + Math.cos(angle) * 130;
              const y = 170 + Math.sin(angle) * 130;
              return (
                <div
                  key={s}
                  className="absolute bg-white border border-teal-900 px-3 py-1.5"
                  style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
                >
                  <div className="font-display font-bold text-[11px] tracking-[0.14em] uppercase text-teal-900">
                    {s}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      }
    />
  );
}

/* ─── Slide 17 — System Architecture (Layout D) ─────────────────────────── */
export function Slide17({ slideNumber }: SlideProps) {
  return (
    <CenterpieceLayout
      slideNumber={slideNumber}
      sectionPill="The Stack"
      titleLight="One"
      titleBold="integrated system."
      subtitle="Six layers, one source of truth."
    >
      <div className="h-full flex items-center">
        <StackDiagram
          layers={[
            { name: "Content", tool: "Utopica", chips: ["Pages", "Topic clusters", "Q&A blocks"], topRule: true },
            { name: "Visibility", tool: "AIO + SEO", chips: ["LLM citations", "Search rankings", "Featured snippets"] },
            { name: "Personalization", tool: "Dynamic Website", chips: ["Headlines", "Case studies", "CTAs"] },
            { name: "Data", tool: "CRM + Intent", chips: ["Identification", "Scoring", "Routing"] },
            { name: "Sales", tool: "AI Sales Tools", chips: ["Prospecting", "Outreach", "Coaching"] },
            { name: "Automation", tool: "Agentic AI", chips: ["Workflows", "Optimization", "Adaptation"], bottomLime: true },
          ]}
        />
      </div>
    </CenterpieceLayout>
  );
}

/* ─── Slide 18 — Expected Impact (Layout D) ─────────────────────────────── */
export function Slide18({ slideNumber }: SlideProps) {
  return (
    <CenterpieceLayout
      slideNumber={slideNumber}
      sectionPill="The Impact"
      titleLight="What"
      titleBold="changes."
      subtitle="Five outcomes, measured at the pipeline level."
      caption="Targets, not commitments. Tracked quarterly post-launch."
    >
      <div className="grid grid-cols-5 gap-4 h-full">
        <MetricCard label="AI Visibility" value="4.2x" direction="up" accent="#65038E" description="Citations across major LLM platforms." />
        <MetricCard label="Inbound Quality" value="60%" direction="up" accent="#00B8B8" description="Lead-to-MQL conversion." />
        <MetricCard label="Sales Cycle" value="35%" direction="down" accent="#65038E" description="Average days to close." />
        <MetricCard label="Conversion Rate" value="2.8x" direction="up" accent="#CFFF1D" description="Visitor-to-meeting." />
        <MetricCard label="Content Cost" value="50%" direction="down" accent="#1B2D5B" description="Cost per published asset." />
      </div>
    </CenterpieceLayout>
  );
}

/* ─── Slide 19 — Execution Roadmap (Layout D) ───────────────────────────── */
export function Slide19({ slideNumber }: SlideProps) {
  const phases = [
    { id: "01", quarter: "Q1", title: "Utopica + Sector Content", body: "Build sector content libraries · Stand up AIO measurement", filled: true },
    { id: "02", quarter: "Q2", title: "Website Personalization", body: "Dynamic headlines + case studies · Identify-and-route logic" },
    { id: "03", quarter: "Q3", title: "AI Sales Tools", body: "Prospecting + outreach automation · Deal intelligence rollout" },
    { id: "04", quarter: "Q4", title: "Full Automation", body: "Agentic workflows · Self-optimizing campaigns" },
  ];
  return (
    <CenterpieceLayout
      slideNumber={slideNumber}
      sectionPill="The Roadmap"
      titleLight="Phased"
      titleBold="execution."
      subtitle="Four phases. Twelve months. Building toward full automation."
    >
      <div className="h-full flex items-center">
        <div className="w-full relative">
          <div className="absolute left-[6%] right-[6%] top-1/2 h-[3px] bg-spectrum -translate-y-1/2 z-0" />
          <div className="grid grid-cols-4 gap-5 relative z-10">
            {phases.map((p) => (
              <div
                key={p.id}
                className={`p-5 border-2 ${p.filled ? "bg-teal-900 border-teal-900 text-white" : "bg-white border-teal-900 text-teal-900"}`}
              >
                <div className="flex items-baseline gap-2">
                  <span className={`font-mono text-[11px] tracking-[0.18em] ${p.filled ? "text-lime" : "text-magenta"}`}>
                    Phase {p.id}
                  </span>
                  <span className={`font-mono text-[10px] tracking-[0.14em] ${p.filled ? "text-white/60" : "text-muted"}`}>
                    · {p.quarter}
                  </span>
                </div>
                <div className={`mt-3 font-display font-bold text-[15px] tracking-[0.06em] uppercase leading-tight ${p.filled ? "text-white" : "text-teal-900"}`}>
                  {p.title}
                </div>
                <div className={`mt-3 text-[12px] italic leading-snug ${p.filled ? "text-white/80" : "text-teal-800"}`}>
                  {p.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CenterpieceLayout>
  );
}

/* ─── Slide 20 — The Opportunity (Layout B — Lime) ──────────────────────── */
export function Slide20({ slideNumber }: SlideProps) {
  return (
    <DividerLayout
      slideNumber={slideNumber}
      bgClass="bg-lime"
      markColorClass="text-teal-900"
      eyebrow="The Opportunity"
      titleLight="Own AI discovery in our sectors —"
      titleBold="before competitors do."
      bullets={[
        "First-mover advantage in AIO",
        "Build a defensible AI presence",
        "Turn visibility into a revenue engine",
      ]}
      textColorClass="text-teal-900"
      subTextColorClass="text-teal-900/85"
      ghostMarks
      cta={<CtaButton>Begin Phase 01 →</CtaButton>}
    />
  );
}
