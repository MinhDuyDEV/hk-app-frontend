import HeaderMain from "@/components/utils/header/HeaderMain";
import Sidebar from "@/components/utils/sidebar/Sidebar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='relative bg-background dark:bg-gray-900 w-full min-h-dvh'>
      <div className='w-full h-20'>
        <div className='fixed w-full top-0 bg-background dark:bg-gray-900 z-50'>
          <HeaderMain />
        </div>
      </div>
      <div className='relative h-full'>
        <div className='flex h-full'>
          <div className='flex-col lg:flex hidden transition-all h-full'>
            <Sidebar />
          </div>
          <div className='flex-1 '>{children}</div>
        </div>
      </div>
    </div>
  );
}
