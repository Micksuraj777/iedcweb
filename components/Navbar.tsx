'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navbarLinks } from '@/constants';
import { cn } from '@/libs/utilis';
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <section className="flex w-full justify-between p-3 text-gray-500">
      <div className="flex flex-1 gap-6 justify-center">
        <span className='pr-10 flex'>
        <Image src='/icons/logo.webp' width={50} height={50} alt='logo' />
        <span className='flex-col'>
        <h1 className='text-gray-700 text-xl font-semibold'>IEDC CCEIJK</h1>
        <h2 className='text-gray-700 text-sm'>Beyond Boundaries</h2>
        </span>
        </span>
        {navbarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 items-center',
                {
                  'text-green-500': isActive,
                }
              )}
            >
              <p className="text-md font-medium hover:text-green-500">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Navbar;