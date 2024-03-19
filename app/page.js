import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold">Blog Fast!</h1>
      <p>Start your blog in <span className="text-purple-800 font-bold dark:text-purple-500">few hours not few days.</span></p>
      <small className="my-4">
        Ready to go, <span className="text-purple-800 font-bold dark:text-purple-500">done for you NextJs blog setup</span>.
        Clone, write your first blog, and deploy. As simple as that.
        <br /><br />
        Focus on writing, not on setting up the blog.
        <br /><br />
        New templates launching soon.
      </small>
      <Link href="/blog">
        <Button>Read blogs</Button>
      </Link>
    </main>
  );
}
