import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";
import { useEffect } from "react";
import type { Route } from "./+types/root";
import { ColorSchemeProvider } from './theme/ColorSchemeProvider';
import { SnackbarProvider } from 'notistack';
import { HelmetProvider } from 'react-helmet-async';
import './i18n';
import './app.css';

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans+Bengali:wght@300;400;500;600;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// View Transitions API wrapper component
function ViewTransitionsOutlet() {
  const location = useLocation();

  useEffect(() => {
    // Only run in browser
    if (typeof document === 'undefined') return;

    // Check if View Transitions API is supported
    const supportsViewTransitions = 'startViewTransition' in document;
    
    if (supportsViewTransitions) {
      // Intercept same-page anchor navigation for smooth transitions
      const handleAnchorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a[href^="#"]');
        
        if (anchor) {
          const href = anchor.getAttribute('href');
          if (href && href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            
            if (element) {
              // Use View Transitions for anchor scroll
              (document as any).startViewTransition(() => {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              });
            }
          }
        }
      };

      document.addEventListener('click', handleAnchorClick);
      return () => document.removeEventListener('click', handleAnchorClick);
    }
  }, [location]);

  return <Outlet />;
}

export default function App() {
  return (
    <HelmetProvider>
      <ColorSchemeProvider>
        <SnackbarProvider maxSnack={3}>
          <ViewTransitionsOutlet />
        </SnackbarProvider>
      </ColorSchemeProvider>
    </HelmetProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre style={{ width: '100%', padding: '1rem', overflow: 'auto', background: '#f5f5f5' }}>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
