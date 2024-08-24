import { useCallback, useEffect, useState } from "react";
import Head from "next/head";

import { CardVideo } from "@components/beranda/CardVideo";

import { music } from "@data/music";
import { users } from "@data/users";

export default function Home() {
  const [shuffledMusic, setShuffledMusic] = useState<any[]>([]);

  function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    setShuffledMusic(shuffleArray([...music]));
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/logo.png" />
        <title>KingTube</title>
      </Head>

      <section className="px-6 mt-20 grid grid-cols-3 gap-4">
        {shuffledMusic.map((musics, index) =>
          users
            .filter((user) => user.id === musics.userId)
            .map((user) => (
              <CardVideo
                key={index + 1}
                id={musics.id}
                titleMusic={musics.titleMusic}
                musicImages={musics.images}
                nameUser={user.nameUser}
                profileUser={user.photoProfile}
                urlMusic={musics.link}
              />
            ))
        )}
      </section>
    </>
  );
}
