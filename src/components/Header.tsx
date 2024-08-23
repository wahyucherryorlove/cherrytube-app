import Image from "next/image";

import { Typography } from "./shadcn/Typography";

import { SearchIcon } from "./icons/SearchIcon";

import CherryTubeIimage from "@images/logo.png";

export function Header() {
  return (
    <header className="bg-neutral-50 dark:bg-[#131212] h-16 flex items-center justify-between px-6 fixed w-full top-0 border-b border-neutral-200 dark:border-[#373A40]">
      <div className="flex items-center gap-x-1">
        <Image
          src={CherryTubeIimage}
          alt="Cherry Tube"
          className="object-contain w-auto h-8"
        />

        <Typography
          variant="h6"
          className="p-0 text-neutral-950 dark:text-neutral-50"
          weight="bold"
        >
          KingTube
        </Typography>
      </div>

      <form className="flex w-1/3 relative">
        <input
          type="text"
          className="py-2.5 w-full text-sm pl-3 pr-10 rounded-md outline-none bg-transparent border-2 dark:border-[#373A40] text-neutral-800 dark:text-neutral-50"
          placeholder="Search..."
        />
        <button className="absolute right-5 h-full flex items-center">
          <SearchIcon className="w-4 h-4 fill-neutral-950 dark:fill-neutral-50" />
        </button>
      </form>

      <div>
        <div className="relative w-10 h-10">
          <Image
            src="/images/users/profiles/user1.png"
            alt="Wahyudi Umar"
            className="object-cover rounded-full"
            fill
          />
        </div>
      </div>
    </header>
  );
}
