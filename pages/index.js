import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Learn Next.js</title>
        <meta name="description" content="Basic concepts of" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Nested routing */}
        <Link href="./menu/items">Go to items page</Link>
        {/* Dynamic routing */}
        <Link href="./dynamic">Go to dynamic page</Link>
      </main>
    </>
  );
}
