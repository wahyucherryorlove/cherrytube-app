import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
} from "@components/shadcn/Card";
import { Typography } from "@components/shadcn/Typography";

import { PlayIcon } from "@components/icons/PlayIcon";

interface CardVideoProps {
  id: number;
  titleMusic: string;
  musicImages: string;
  nameUser: string;
  profileUser: string;
  urlMusic: string;
}

export function CardVideo({
  id = 0,
  titleMusic = "",
  musicImages = "",
  nameUser = "",
  profileUser = "",
  urlMusic = "",
}: CardVideoProps) {
  return (
    <Card
      className="p-0 rounded-md border-hidden w-[396px] desktop:w-full"
      key={id}
    >
      <CardHeader className="p-0">
        <Link href={`${urlMusic}`} className="relative w-full h-52 group">
          <Image
            src={`/images/users/music/${musicImages}`}
            alt="Westlife"
            className="object-cover rounded-md"
            fill
          />

          <div className="absolute w-full h-full bg-black/50 rounded-md flex items-center justify-center group-hover:opacity-100 opacity-0 duration-150">
            <PlayIcon className="w-5 h-5 fill-neutral-50" />
            <Typography variant="b4" className="ml-2" weight="bold">
              PUTAR LAGU
            </Typography>
          </div>
        </Link>
      </CardHeader>

      <CardContent className="px-0 pt-4 flex items-start gap-x-4">
        <Link href="" className="relative w-10 h-10 pr-10">
          <Image
            src={`/images/users/profiles/${profileUser}`}
            alt={`${nameUser}`}
            className="object-cover rounded-full"
            fill
          />
        </Link>
        <div>
          <CardDescription className="text-lg">
            {titleMusic.length < 60
              ? titleMusic
              : titleMusic.substring(0, 65) + "..."}
          </CardDescription>

          <div className="flex gap-x-2 items-center mt-1">
            <Link href="" className="text-neutral-400 text-sm capitalize">
              {nameUser}
            </Link>
            <span className="block w-1 h-1 mt-1.5 rounded-full bg-neutral-500" />
            <Typography variant="b4" className="text-neutral-400">
              3 tahun yang lalu
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
