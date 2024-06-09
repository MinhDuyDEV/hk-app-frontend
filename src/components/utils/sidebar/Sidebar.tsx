"use client";

import { sidebarLinks } from "@/constants/sidebar-link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import SidebarLink from "./SidebarLink";
import { TSidebarLink } from "@/types/general.types";
import { usePathname } from "next/navigation";
import { ArrowBigLeft } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Sidebar() {
  let string = "/";
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();
  return (
    <div className='flex flex-col items-center justify-between h-full  p-8'>
      <div className='flex flex-col items-center gap-5'>
        <div className='flex flex-col transition-all gap-5'>
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
        <span onClick={() => setIsHidden(!isHidden)}>
          <ArrowBigLeft className='h-6 w-6' />
        </span>
      </div>
      <ModeToggle />
    </div>
  );
}
