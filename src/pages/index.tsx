import Head from "next/head";

import { CardVideo } from "@components/beranda/CardVideo";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/logo.png" />
        <title>KingTube</title>
      </Head>

      <section className="px-6 mt-20 grid grid-cols-3">
        <CardVideo />
      </section>
    </>
  );
}
