import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderMain = () => {
  return (
    <div className='flex items-center justify-between py-5 px-8'>
      <Link href='/' className='flex items-center justify-center gap-4'>
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
      </Link>
      <div className='flex items-center justify-center gap-3'>
        <h3 className='text-xl font-semibold'>Minh Duy</h3>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default HeaderMain;
