import Link from "next/link";
import { usePathname } from "next/navigation";

import { BellIcon } from "./icons/BellIcon";
import { BookmarkIcon } from "./icons/BookmarkIcon";
import { HistoryIcon } from "./icons/HistoryIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { VideoIcon } from "./icons/VideoIcon";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-16 bg-[#131212] h-full w-[260px] border-r border-[#373A40] px-4 pt-7">
      <ul className="flex flex-col gap-y-2">
        <li>
          <Link
            href=""
            className={`${
              pathname === "/"
                ? "bg-[#1B1B1B] font-bold"
                : "bg-transparent font-normal"
            } flex items-center gap-x-4 text-neutral-50 px-4 py-2.5 rounded-md hover:bg-[#1B1B1B] duration-150`}
          >
            <HomeIcon className="w-5 h-5 fill-neutral-50" /> Beranda
          </Link>
        </li>
      </ul>

      <hr className="my-3 border-[#373A40]" />

      <ul className="flex flex-col gap-y-2">
        <li>
          <Link
            href=""
            className={`${
              pathname === "/history"
                ? "bg-[#1B1B1B] font-bold"
                : "bg-transparent font-normal"
            } flex items-center gap-x-4 text-neutral-50 px-4 py-2.5 rounded-md hover:bg-[#1B1B1B] duration-150`}
          >
            <HistoryIcon className="w-5 h-5 fill-neutral-50" /> Histori
          </Link>
        </li>
        <li>
          <Link
            href=""
            className={`${
              pathname === "/notification"
                ? "bg-[#1B1B1B] font-bold"
                : "bg-transparent font-normal"
            } flex items-center gap-x-4 text-neutral-50 px-4 py-2.5 rounded-md hover:bg-[#1B1B1B] duration-150`}
          >
            <BellIcon className="w-5 h-5 fill-neutral-50" /> Notifikasi
          </Link>
        </li>
        <li>
          <Link
            href=""
            className={`${
              pathname === "/videos"
                ? "bg-[#1B1B1B] font-bold"
                : "bg-transparent font-normal"
            } flex items-center gap-x-4 text-neutral-50 px-4 py-2.5 rounded-md hover:bg-[#1B1B1B] duration-150`}
          >
            <VideoIcon className="w-5 h-5 fill-neutral-50" /> Video Anda
          </Link>
        </li>
        <li>
          <Link
            href=""
            className={`${
              pathname === "/videos"
                ? "bg-[#1B1B1B] font-bold"
                : "bg-transparent font-normal"
            } flex items-center gap-x-4 text-neutral-50 px-4 py-2.5 rounded-md hover:bg-[#1B1B1B] duration-150`}
          >
            <BookmarkIcon className="w-5 h-5 fill-neutral-50" /> Disimpan
          </Link>
        </li>
      </ul>
    </aside>
  );
}
