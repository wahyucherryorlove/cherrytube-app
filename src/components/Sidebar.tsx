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
    <aside className="fixed top-16 bg-neutral-50 dark:bg-[#131212] h-full w-[260px] border-r border-neutral-200 dark:border-[#373A40] px-4 pt-7 z-50">
      <ul className="flex flex-col gap-y-2">
        <li>
          <Link
            href=""
            className={`${
              pathname === "/"
                ? "bg-[#1B1B1B] font-bold text-neutral-50"
                : "bg-transparent font-normal text-neutral-950 dark:text-neutral-50"
            } flex items-center gap-x-4 px-4 py-2.5 rounded-md hover:bg-[#1B1B1B] duration-150 group hover:text-neutral-50`}
          >
            <HomeIcon
              className={`${
                pathname === "/"
                  ? "fill-neutral-50"
                  : "fill-neutral-950 dark:fill-neutral-50"
              } w-5 h-5 group-hover:fill-neutral-50`}
            />{" "}
            Beranda
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
                ? "bg-[#1B1B1B] font-bold text-neutral-50"
                : "bg-transparent font-normal text-neutral-950 dark:text-neutral-50"
            } flex items-center gap-x-4 px-4 py-2.5 rounded-md hover:bg-[#1B1B1B] duration-150 group hover:text-neutral-50`}
          >
            <HistoryIcon
              className={`${
                pathname === "/history"
                  ? "fill-neutral-50"
                  : "fill-neutral-950 dark:fill-neutral-50"
              } w-5 h-5 group-hover:fill-neutral-50`}
            />{" "}
            Histori
          </Link>
        </li>
        <li>
          <Link
            href=""
            className={`${
              pathname === "/notification"
                ? "bg-[#1B1B1B] font-bold text-neutral-50"
                : "bg-transparent font-normal text-neutral-950 dark:text-neutral-50"
            } flex items-center gap-x-4 px-4 py-2.5 rounded-md hover:bg-[#1B1B1B] duration-150 group hover:text-neutral-50`}
          >
            <BellIcon
              className={`${
                pathname === "/notification"
                  ? "fill-neutral-50"
                  : "fill-neutral-950 dark:fill-neutral-50"
              } w-5 h-5 group-hover:fill-neutral-50`}
            />{" "}
            Notifikasi
          </Link>
        </li>
        <li>
          <Link
            href=""
            className={`${
              pathname === "/videos"
                ? "bg-[#1B1B1B] font-bold text-neutral-50"
                : "bg-transparent font-normal text-neutral-950 dark:text-neutral-50"
            } flex items-center gap-x-4 px-4 py-2.5 rounded-md hover:bg-[#1B1B1B] duration-150 group hover:text-neutral-50`}
          >
            <VideoIcon
              className={`${
                pathname === "/videos"
                  ? "fill-neutral-50"
                  : "fill-neutral-950 dark:fill-neutral-50"
              } w-5 h-5 group-hover:fill-neutral-50`}
            />{" "}
            Video Anda
          </Link>
        </li>
        <li>
          <Link
            href=""
            className={`${
              pathname === "/saved"
                ? "bg-[#1B1B1B] font-bold text-neutral-50"
                : "bg-transparent font-normal text-neutral-950 dark:text-neutral-50"
            } flex items-center gap-x-4 px-4 py-2.5 rounded-md hover:bg-[#1B1B1B] duration-150 group hover:text-neutral-50`}
          >
            <BookmarkIcon
              className={`${
                pathname === "/saved"
                  ? "fill-neutral-50"
                  : "fill-neutral-950 dark:fill-neutral-50"
              } w-5 h-5 group-hover:fill-neutral-50`}
            />{" "}
            Disimpan
          </Link>
        </li>
      </ul>
    </aside>
  );
}
