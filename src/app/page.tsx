import Link from "next/link";

export default function HomePage() {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <Link
        href='/dashboard'
        className='px-8 py-4 bg-slate-600 dark:bg-gray-200 rounded-md dark:text-gray-700 text-gray-100'
      >
        Go to dashboard &rarr;
      </Link>
    </div>
  );
}
