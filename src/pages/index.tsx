import Head from "next/head";

import { Header } from "@components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/logo.png" />
        <title>KingTube</title>
      </Head>

      <section className="mt-5"></section>
    </>
  );
}
