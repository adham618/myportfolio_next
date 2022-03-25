import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

import Logo from '../SVG/Logo';
import ThemeToggle from '../ThemeToggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact-us', label: 'Contact' },
];

export default function Header() {
  const [open, setopen] = React.useState(false);
  const [onTop, setOnTop] = React.useState(true);
  // sets class dark to html
  const router = useRouter();
  const handleScroll = () => {
    if (onTop !== (window.pageYOffset === 0)) {
      setOnTop(window.pageYOffset === 0);
    }
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <header
      className={`${
        onTop
          ? ''
          : 'shadow-sm dark:border-b-[0.2px] dark:border-none dark:border-slate-300/10 dark:bg-primary'
      } sticky  top-0 z-50 bg-opacity-90  backdrop-blur-lg  transition-shadow dark:bg-dark dark:bg-opacity-90 dark:backdrop-blur-lg `}
    >
      {/* <div className='h-2 bg-gradient-to-tr from-primary-500 via-primary-200 to-primary-800'></div> */}

      <div className='layout flex h-16 items-center justify-between px-2'>
        <div
          className='cursor-pointer text-primary'
          onClick={() => router.push('/')}
        >
          <Logo />
        </div>
        <div className='flex items-center justify-between '>
          <nav className='mr-5 hidden flex-none md:block'>
            <ul className='flex space-x-7'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <Link href={href}>
                    <a
                      className={clsx(
                        ' hover:text-primary-focus dark:text-content-dark dark:hover:text-primary-content',
                        router.pathname === href &&
                          'font-bold text-primary-focus dark:font-bold dark:text-primary-content'
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
                className='absolute top-0 left-0 h-screen w-full cursor-pointer bg-dark opacity-30 md:hidden'
              ></div>
              <nav className=' absolute top-0 left-0 h-screen bg-white dark:bg-primary dark:text-primary-content md:hidden'>
                <div className='m-4'>
                  <IoClose
                    onClick={() => setopen(!open)}
                    className='absolute right-3 inline-block h-9 w-9  cursor-pointer stroke-current   p-1 hover:rounded-md hover:bg-slate-200 focus:outline-none dark:text-slate-400 dark:hover:bg-opacity-40'
                  />
                  <div
                    className='cursor-pointer'
                    onClick={() => router.push('/')}
                  >
                    <Logo />
                  </div>
                </div>
                <ul className='menu mt-8 w-72 overflow-y-auto'>
                  {links.map(({ href, label }) => (
                    <li key={`${href}${label}`} onClick={() => setopen(!open)}>
                      <Link href={href}>
                        <a
                          className={clsx(
                            '',
                            router.pathname === href &&
                              'bg-primary text-primary-content dark:bg-primary-focus'
                          )}
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
          <button
            aria-label='nav toggle'
            onClick={() => setopen(!open)}
            className='ml-3 cursor-pointer p-1.5 hover:rounded-md hover:bg-slate-200 focus:outline-none dark:text-slate-400  dark:hover:bg-opacity-40 md:hidden  '
          >
            {open ? (
              <IoClose className='inline-block h-7 w-7 stroke-current dark:text-slate-400' />
            ) : (
              <HiOutlineMenu className='inline-block h-7 w-7 stroke-current checked:hidden dark:text-slate-400' />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
