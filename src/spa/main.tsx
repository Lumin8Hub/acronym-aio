// Standalone SPA entry used ONLY for the GitHub Pages static build.
// Lovable dev/preview continues to use TanStack Start (src/router.tsx + __root.tsx).
import "../styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createRouter,
  createHashHistory,
} from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";

// Use hash history so GitHub Pages doesn't need server-side route rewrites.
// Every route resolves from the single index.html shipped at the repo base path.
const router = createRouter({
  routeTree,
  history: createHashHistory(),
  context: {},
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootEl = document.getElementById("root")!;
createRoot(rootEl).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
