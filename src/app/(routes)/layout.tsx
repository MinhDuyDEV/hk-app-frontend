import HeaderMain from "@/components/utils/header/HeaderMain";
import Sidebar from "@/components/utils/sidebar/Sidebar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='relative bg-gray-200 dark:bg-gray-900 w-full min-h-dvh'>
      <div className='w-full h-20'>
        <div className='fixed w-full top-0 bg-gray-200 dark:bg-gray-900 z-50'>
          <HeaderMain />
        </div>
      </div>
      <div className='relative h-full'>
        <div className='flex h-full'>
          <div className='sticky top-20 bg-gray-200 dark:bg-gray-900 flex-col lg:flex hidden transition-all h-screen'>
            <Sidebar />
          </div>
          <div className='flex-1 m-2 overflow-hidden rounded-[0.5rem] border bg-background shadow'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
