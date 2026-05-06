## Acronym AIO Strategy 2.0 — Slide Deck

Build the full 20-slide interactive presentation per the supplied `instructions.md` and `design.md`, using `app.jsx` as the architecture reference. All slide copy is used verbatim — nothing paraphrased or invented.

### Stack adaptation (one heads-up)

The brief assumes React Router + Vite + Tailwind v3 config file. This project runs **TanStack Start + Tailwind v4 (CSS-only theme)**. I'll adapt the shell to that stack — the user-facing behavior, layouts, content, and visual contract from `design.md` stay 100% intact:

- Routing: TanStack Router file routes (`/`, `/slide/$id`) instead of HashRouter — `/` redirects to `/slide/1`, browser back/forward works the same.
- Tailwind v4: brand tokens (teal-900/800/700, navy, cyan, magenta, lime, paper, line, muted, spectrum gradient) registered in `src/styles.css` `@theme` block instead of `tailwind.config.js`.
- Animation: `framer-motion`. Icons: `lucide-react`. Fonts: Barlow 300/400/500/600/700 + JetBrains Mono via Google Fonts in `__root.tsx` head.

### What gets built

**Shell (from `app.jsx`, lifted into proper files)**
- `src/routes/__root.tsx` — head with Barlow font links, brand meta tags
- `src/routes/index.tsx` — redirects to `/slide/1`
- `src/routes/slide.$id.tsx` — slide stage, AnimatePresence transitions, NavControls, TOC drawer
- `src/hooks/useFullscreen.ts`, `useKeyboardNav.ts`, `useAutoHide.ts`
- `src/components/slide/` — `AMark`, `AMarkGradient`, `Wordmark`, `GradientRule`, `EdgeStrip`, `SectionPill`, `FooterChrome`, `SlideFrame`, `ContentLayout` (Layout C), `DividerLayout` (Layout B), `NavControls`, `TableOfContents`
- `src/components/slide/parts/` — reusable `MetricCard`, `FeatureRow`, `SectorPillar`, `FunnelDiagram`, `StackDiagram`

**Behavior (matches brief exactly)**
- 16:9 stage scaled with `min(100vw, 100vh*16/9)` + `aspect-video`, centered
- Bottom nav bar: prev / `03 / 20` counter / 200px gradient progress / next / TOC / fullscreen — auto-hides after 3s mouse inactivity
- TOC drawer: 420px right-edge, teal-900 bg, current slide marked with 4px lime left-border, click-outside / Esc closes
- Keyboard: ← → Space PgUp PgDn Home End F T Esc
- Slide transitions: 200ms fade + 12px slide-up, honors `useReducedMotion`
- Mobile (<768px): full-width scrolling, nav bar always visible

**All 20 slides — verbatim copy from instructions.md**

| # | Title | Layout | Visual |
|---|---|---|---|
| 1 | Title | A Cover | Wordmark + animated cyan/magenta node-network SVG |
| 2 | The Shift | D | Two stacked funnels (Traditional vs AI-Driven) + 3 stats |
| 3 | The Core Problem | C | Gaps Diagram: CONTENT — ??? — REVENUE + ghost cards |
| 4 | Strategic Reframe | B Magenta | Cyan oversized A-mark + constellation |
| 5 | Utopica Foundation | C | Vertical chain: Questions→Entities→Answers→AI Pickup |
| 6 | How Utopica Wins | C | Query bubble → AI brain → answer card with lime highlight |
| 7 | Sector-Based Strategy | B Cyan | Navy A-mark + 5-chip pillar diagram |
| 8 | Energy & Utilities | C | Ontario map outline w/ lime utility-hub nodes + fiber lines |
| 9 | Priority Sectors 02–05 | D | 4-column SectorPillar grid (Public/ISP/Wholesale/Capital) |
| 10 | Competitive Advantage | C | NA map fragment, gradient fiber routes, latency pills |
| 11 | AIO Revenue Engine | D | 5-node FunnelDiagram (Utopica→Discovery→Site→Trigger→Deal) |
| 12 | Dynamic Website Layer | C | 3 stacked tilted webpage mockups, sector variants |
| 13 | Intent + Data Layer | C | FeatureRows + "Accounts This Week" dashboard mock |
| 14 | Sales Acceleration | C | FeatureRows + Lead→Enrich→Outreach→Meeting flow |
| 15 | Creative Engine | C | Radial fan-out: Blog → 6 output channels |
| 16 | Agentic AI | C | Observe→Decide→Act→Learn loop (custom SVG), cyan A-mark center |
| 17 | System Architecture | D | StackDiagram: 6 layered bars w/ chip lists |
| 18 | Expected Impact | D | 5-card MetricCard grid w/ ↑↓ deltas |
| 19 | Execution Roadmap | D | 4-phase horizontal timeline, Phase 01 filled |
| 20 | The Opportunity | B Lime | Teal-900 A-mark + 5 ghost A-marks behind, CTA button |

**Design system enforced everywhere**
- Teal-900 carries ~70% visual weight; one signal accent per slide (cyan / magenta / lime)
- Square corners on cards/buttons; chips are the only rounded element
- Spectrum gradient: only as rules, edge strips, master wordmark — never behind text
- Title pattern: `LIGHT WORDS, BOLD ANCHOR.`
- Lime A-mark watermark bleeds bottom-right of every Layout C visual column
- Right-edge 5px gradient strip on Layouts A and C; section pill top-right of C

### Out of scope

- No backend, no database, no auth, no analytics — purely a static deck
- No external image assets — every visual is inline SVG
- Won't add a slide editor or content CMS (the deck is fixed)

### Done means

All 20 slides render with verbatim copy, all four layouts implemented, keyboard + TOC + fullscreen + URL sync all working, motion respects reduced-motion preference, no text-only slides.