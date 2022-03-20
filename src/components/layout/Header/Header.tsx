import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

import Logo from '../../SVG/Logo';
import ThemeToggle from '../../ThemeToggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const [open, setopen] = React.useState(false);
  const router = useRouter();
  return (
    <header className='sticky top-0 z-50 w-full border-y border-base-300 bg-base-100 px-2'>
      <div className='container mx-auto flex h-14 items-center justify-between'>
        <div className='flex items-center justify-between gap-3'>
          <div
            className=' w-28 cursor-pointer text-xl  font-bold normal-case'
            onClick={() => router.push('/')}
          >
            <Logo />
          </div>
        </div>
        <div className='flex items-center justify-between '>
          <nav className='hidden flex-none md:block'>
            <ul className='flex space-x-7'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <Link href={href}>
                    <a
                      className={clsx(
                        'text-gray-500',
                        router.pathname === href && 'text-primary-focus'
                      )}
                    >
                      {label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {open && (
            <>
              <div
                onClick={() => setopen(!open)}
                className='absolute top-0 left-0 h-screen w-full cursor-pointer bg-black opacity-30 md:hidden'
              ></div>
              <nav className='z-500 absolute top-0 left-0 h-screen bg-base-100 md:hidden'>
                <IoClose
                  onClick={() => setopen(!open)}
                  className='absolute right-0 m-4 inline-block h-6 w-6 cursor-pointer stroke-current'
                />
                <ul className='menu mt-11 w-72 overflow-y-auto p-4'>
                  {links.map(({ href, label }) => (
                    <li key={`${href}${label}`} onClick={() => setopen(!open)}>
                      <Link href={href}>
                        <a
                          className={`${
                            router.pathname === href &&
                            'bg-primary-focus text-primary-content'
                          }`}
                        >
                          {label}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </>
          )}

          <ThemeToggle />
          <div
            onClick={() => setopen(!open)}
            className='ml-3 cursor-pointer md:hidden'
          >
            <HiOutlineMenu className='inline-block h-6 w-6 stroke-current' />
          </div>
        </div>
      </div>
    </header>
  );
}
