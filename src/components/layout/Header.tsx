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
  { href: '/contact', label: 'Contact' },
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
        onTop ? '' : 'shadow-sm'
      } sticky top-0 z-50 transition-shadow`}
    >
      <div className='h-2 bg-gradient-to-tr from-primary-500 via-primary-200 to-primary-800'></div>

      <div className='container mx-auto flex h-16 items-center justify-between px-2'>
        <div className='cursor-pointer' onClick={() => router.push('/')}>
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
                        ' dark:text-white',
                        router.pathname === href &&
                          'font-bold text-primary-800 dark:font-bold dark:text-primary-800'
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
              <nav className=' absolute top-0 left-0 h-screen bg-white dark:bg-dark dark:text-white md:hidden'>
                <div className='m-4'>
                  <IoClose
                    onClick={() => setopen(!open)}
                    className='absolute right-3 inline-block h-6 w-6 cursor-pointer stroke-current'
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
                    <li
                      key={`${href}${label}`}
                      onClick={() => setopen(!open)}
                      className='border'
                    >
                      <Link href={href}>
                        <a
                          className={clsx(
                            'dark:text-white',
                            router.pathname === href &&
                              'bg-primary-900 text-white'
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
          <div
            onClick={() => setopen(!open)}
            className='ml-3 cursor-pointer md:hidden'
          >
            <HiOutlineMenu className='inline-block h-6 w-6 stroke-current dark:text-white' />
          </div>
        </div>
      </div>
    </header>
  );
}
