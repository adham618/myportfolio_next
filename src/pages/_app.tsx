import { AppProps } from 'next/app';
import Router from 'next/router';
import { ThemeProvider } from 'next-themes';
import NProgress from 'nprogress';
import { useEffect } from 'react';

import '@/styles/nprogress.css';
import '@/styles/globals.css';

import ClientOnlyPortal from '@/lib/ClientOnlyPortal';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const delay = 500; // in milliseconds
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timer: any;
    const load = () => {
      timer = setTimeout(function () {
        NProgress.start();
      }, delay);
    };
    const stop = () => {
      clearTimeout(timer);
      NProgress.done();
    };
    Router.events.on('routeChangeStart', () => load());
    Router.events.on('routeChangeComplete', () => stop());
    Router.events.on('routeChangeError', () => stop());
  }, []);
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <ClientOnlyPortal selector='#__next'>
        <Component {...pageProps} />
      </ClientOnlyPortal>
    </ThemeProvider>
  );
}

export default MyApp;
