import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>My NextJs Minimal Blog Boilerplate.</section>
      <p>Ready to go with minimal setup. Move fast with blogs.</p>
      <br />
      <Link href="/blog">Blog &rarr;</Link>
    </>
  );
}
