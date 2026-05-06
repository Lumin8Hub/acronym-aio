import {
  Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07, Slide08, Slide09, Slide10, Slide11,
} from "./slides-1-11";
import {
  Slide12, Slide13, Slide14, Slide15, Slide16, Slide17, Slide18, Slide19, Slide20,
} from "./slides-12-20";
import type { SlideProps } from "./layouts";

export type SlideEntry = {
  id: number;
  title: string;
  blurb: string;
  Component: (p: SlideProps) => JSX.Element;
};

export const SLIDES: SlideEntry[] = [
  { id: 1,  title: "Title",                  blurb: "AIO Strategy 2.0 — opening",            Component: Slide01 },
  { id: 2,  title: "The Shift",              blurb: "From SEO to AI discovery",              Component: Slide02 },
  { id: 3,  title: "The Core Problem",       blurb: "Content alone doesn't close deals",     Component: Slide03 },
  { id: 4,  title: "Strategic Reframe",      blurb: "Training AI to recommend us",           Component: Slide04 },
  { id: 5,  title: "Utopica Foundation",     blurb: "The structured content engine",         Component: Slide05 },
  { id: 6,  title: "How Utopica Wins",       blurb: "Engineered to be cited",                Component: Slide06 },
  { id: 7,  title: "Sector-Based Strategy",  blurb: "From horizontal to verticalized",       Component: Slide07 },
  { id: 8,  title: "Energy & Utilities",     blurb: "Priority sector 01",                    Component: Slide08 },
  { id: 9,  title: "Priority Sectors 02–05", blurb: "Public, ISPs, Wholesale, Capital",      Component: Slide09 },
  { id: 10, title: "Competitive Advantage",  blurb: "Built for mission-critical",            Component: Slide10 },
  { id: 11, title: "AIO Revenue Engine",     blurb: "Five connected stages",                 Component: Slide11 },
  { id: 12, title: "Dynamic Website Layer",  blurb: "One site, three sectors",               Component: Slide12 },
  { id: 13, title: "Intent + Data Layer",    blurb: "Know who's actually buying",            Component: Slide13 },
  { id: 14, title: "Sales Acceleration",     blurb: "Sellers, amplified",                    Component: Slide14 },
  { id: 15, title: "Creative Engine",        blurb: "One asset, infinite outputs",           Component: Slide15 },
  { id: 16, title: "Agentic AI",             blurb: "Systems that run themselves",           Component: Slide16 },
  { id: 17, title: "System Architecture",    blurb: "Six layers, one source of truth",       Component: Slide17 },
  { id: 18, title: "Expected Impact",        blurb: "What changes",                          Component: Slide18 },
  { id: 19, title: "Execution Roadmap",      blurb: "Phased over twelve months",             Component: Slide19 },
  { id: 20, title: "The Opportunity",        blurb: "Own AI discovery before competitors",   Component: Slide20 },
];

export const TOTAL = SLIDES.length;
