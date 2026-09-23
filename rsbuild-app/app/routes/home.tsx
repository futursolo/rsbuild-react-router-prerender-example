export default function Home() {
  return <p>Home page</p>;
}

export async function loader() {
  return { greeting: "hello from the root loader" };
}
