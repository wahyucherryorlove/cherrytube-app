import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import { Button } from "./shadcn/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/shadcn/DropdownMenu";
import { Typography } from "./shadcn/Typography";

import { MoonIcon } from "./icons/MoonIcon";
import { SearchIcon } from "./icons/SearchIcon";
import { SunIcon } from "./icons/SunIcon";

import CherryTubeIimage from "@images/logo.png";

export function Header() {
  const { setTheme } = useTheme();

  return (
    <header className="bg-neutral-50 dark:bg-[#131212] h-16 flex items-center justify-between px-6 fixed w-full top-0 border-b border-neutral-200 dark:border-[#373A40] z-50">
      <Link href="#" className="flex items-center gap-x-1">
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
      </Link>

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

      <div className="flex gap-x-2 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="outline-none shadow-none focus-visible:ring-0 rounded-full border-none"
            >
              <SunIcon className="h-5 w-5 block dark:hidden fill-neutral-950" />
              <MoonIcon className="h-5 w-5 hidden dark:block dark:fill-neutral-50" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-neutral-200 border-neutral-600 dark:bg-neutral-950 dark:border-[#373A40]"
          >
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setTheme("light")}
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setTheme("dark")}
            >
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setTheme("system")}
            >
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="relative w-10 h-10">
          <Image
            src="/images/users/profiles/westlife.png"
            alt="Wahyudi Umar"
            className="object-cover rounded-full"
            fill
          />
        </div>
      </div>
    </header>
  );
}
