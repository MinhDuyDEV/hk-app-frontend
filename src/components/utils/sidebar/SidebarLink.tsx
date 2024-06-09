"use client";

import { cn } from "@/lib/utils";
import { TSidebarLink } from "@/types/general.types";
import Link from "next/link";
import React from "react";

interface SidebarLinkProps {
  link: TSidebarLink;
  isActive: boolean;
  isHidden: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  link,
  isActive,
  isHidden,
}) => {
  return (
    <Link
      href={link.path}
      className={cn(
        "flex items-center gap-5 font-bold text-zinc-600 dark:text-zinc-200 dark:hover:bg-slate-800  hover:bg-zinc-300/50 hover:text-zinc-600 p-3 rounded-lg transition-all",
        isActive
          ? "text-zinc-200 bg-slate-700 hover:text-zinc-200 hover:bg-slate-700 dark:text-zinc-800 dark:bg-slate-200 dark:hover:text-zinc-800 dark:hover:bg-slate-200"
          : ""
      )}
    >
      <span>{link.icon}</span>
      <span className={cn(isHidden ? "hidden" : "")}>{link.title}</span>
    </Link>
  );
};

export default SidebarLink;
