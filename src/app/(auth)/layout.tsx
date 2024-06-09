import Header from "@/components/utils/header/Header";
import React from "react";

export default function LayoutAuthentication({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='relative bg-gray-200 dark:bg-gray-900 w-full h-lvh'>
      <div className='w-full h-20'>
        <div className='fixed w-full top-0 bg-gray-200 dark:bg-gray-900 z-50'>
          <Header />
        </div>
      </div>
      <div className='relative w-full h-full grid grid-cols-1 place-items-center'>
        {children}
      </div>
    </div>
  );
}
