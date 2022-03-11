import * as React from 'react';

export default function Footer() {
  return (
    <footer className='layout absolute bottom-2 flex items-center justify-center text-center text-gray-700'>
      © {new Date().getFullYear()} By{' '}
      <a href='https://adhamtarek.vercel.app'> Adham Tarek</a>
    </footer>
  );
}
