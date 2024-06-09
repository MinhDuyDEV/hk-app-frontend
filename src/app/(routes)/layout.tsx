import HeaderMain from "@/components/utils/header/HeaderMain";

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
        <div className='flex justify-start'>
          <div className='flex-col w-64 flex-shrink-0 lg:block hidden'>
            side bar Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ex, aliquid accusamus, cum laudantium explicabo quidem qui
            laboriosam ad enim nostrum voluptas, similique illo ratione maiores
            totam sequi tenetur dignissimos quo!
          </div>
          <div className='col-auto'>{children}</div>
        </div>
      </div>
    </div>
  );
}
