import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className='flex items-center justify-between py-5 px-8'>
      <div className='flex items-center justify-center gap-4'>
        <div className='relative'>
          <Image
            src='/logo.png'
            width={112}
            height={28}
            className='w-full h-full object-cover'
            alt='logo'
          />
        </div>
        <h1 className='text-2xl font-extrabold text-slate-700 dark:text-slate-300'>
          HKAPP
        </h1>
      </div>
      <ModeToggle />
    </div>
  );
};

export default Header;
