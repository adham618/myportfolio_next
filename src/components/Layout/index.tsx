import * as React from 'react';

import sayHello from '@/lib/sayHello';

import Footer from './Footer';
import Header from './Header';
export default function Layout({ children }: { children: React.ReactNode }) {
  sayHello();
  return (
    <div className='h-screen'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
