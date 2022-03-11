import Link from 'next/link';
import * as React from 'react';

const links = [
  { href: '/blog', label: 'Blog' },
  { href: '/', label: 'Projects' },
  { href: '/', label: 'About' },
  { href: '/', label: 'Contact' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white'>
      <div className='layout flex h-14 items-center justify-between'>
        <Link href='/'>
          <a href='' className='font-bold hover:text-gray-600'>
            Adham Tarek
          </a>
        </Link>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href}>
                  <a className='hover:text-gray-600'>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
