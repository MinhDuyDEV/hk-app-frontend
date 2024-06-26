"use client";

import { sidebarLinks } from "@/constants/sidebar-link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import SidebarLink from "./SidebarLink";
import { TSidebarLink } from "@/types/general.types";
import { usePathname } from "next/navigation";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Sidebar() {
  let string = "/";
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "hidden lg:flex flex-col items-center justify-start gap-3 p-8 transition-all duration-300 sticky top-20 h-full",
        isHidden ? "w-0" : "w-64"
      )}
    >
      <div className="absolute top-1/2 right-0 translate-x-6 p-1 bg-gray-600 dark:bg-gray-200 text-slate-200 dark:text-slate-600 rounded-full">
        {isHidden ? (
          <span
            className="cursor-pointer"
            onClick={() => setIsHidden(!isHidden)}
          >
            <ArrowBigRight className="h-6 w-6" />
          </span>
        ) : (
          <span
            className="cursor-pointer"
            onClick={() => setIsHidden(!isHidden)}
          >
            <ArrowBigLeft className="h-6 w-6" />
          </span>
        )}
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col gap-5">
          {sidebarLinks.map((link: TSidebarLink) => (
            <SidebarLink
              key={link.title}
              isActive={string
                .concat(pathname.split("/")[1])
                .includes(link.path)}
              link={link}
              isHidden={isHidden}
            />
          ))}
        </div>
      </div>
      <ModeToggle />
    </div>
  );
}
