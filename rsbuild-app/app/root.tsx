import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

export function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children ?? <Outlet />}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <h1>Root</h1>;
}

// A loader on the root route is what makes React Router issue a root data
// request during prerendering (`/_.data` on Vite, `/_root.data` on Rsbuild).
export async function loader() {
  return { greeting: "hello from the root loader" };
}
