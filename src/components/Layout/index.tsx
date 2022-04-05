import * as React from 'react';

import sayHello from '@/lib/sayHello';

import Footer from './Footer';
import Header from './Header';
let saidHello = !true;

export default function Layout({ children }: { children: React.ReactNode }) {
  if (!saidHello) {
    sayHello();
    saidHello = true;
  }
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
