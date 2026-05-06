import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-teal-900 px-4">
      <div className="max-w-md text-center text-white">
        <h1 className="text-7xl font-light tracking-[0.05em] uppercase">404</h1>
        <h2 className="mt-4 text-xl font-bold uppercase tracking-[0.06em]">Slide not found</h2>
        <p className="mt-2 text-sm text-white/60">
          That slide doesn't exist in this deck.
        </p>
        <div className="mt-6">
          <Link
            to="/slide/$id"
            params={{ id: "1" }}
            className="inline-flex items-center justify-center bg-lime px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-teal-900 transition-colors hover:bg-cyan"
          >
            Go to Slide 1
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Acronym — AIO Strategy 2.0" },
      { name: "description", content: "From content to AI-driven revenue engine. Sector-specific growth powered by Utopica + AI systems." },
      { name: "author", content: "Acronym" },
      { property: "og:title", content: "Acronym — AIO Strategy 2.0" },
      { property: "og:description", content: "From content to AI-driven revenue engine. Sector-specific growth powered by Utopica + AI systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Acronym — AIO Strategy 2.0" },
      { name: "twitter:description", content: "From content to AI-driven revenue engine. Sector-specific growth powered by Utopica + AI systems." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6ad3fac3-4403-4084-8d3e-f93d4d3d7b4a/id-preview-3ba66604--26e9150d-addf-496e-aac1-da8a171b3fac.lovable.app-1778090567165.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6ad3fac3-4403-4084-8d3e-f93d4d3d7b4a/id-preview-3ba66604--26e9150d-addf-496e-aac1-da8a171b3fac.lovable.app-1778090567165.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Rubik:wght@500&family=Roboto:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
