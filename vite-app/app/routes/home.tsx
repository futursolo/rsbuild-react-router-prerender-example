export default function Home() {
  return <p>Home page</p>;
}

// A loader on the root route is what makes React Router issue a root data
// request during prerendering (`/_.data` on Vite, `/_root.data` on Rsbuild).
export async function loader() {
  return { greeting: "hello from the root loader" };
}
