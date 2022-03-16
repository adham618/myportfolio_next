import * as React from 'react';
import { useEffect } from 'react';
import { BiMoon } from 'react-icons/bi';
import { CgSun } from 'react-icons/cg';

export default function ThemeToggle() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { themeChange } = require('theme-change');
  useEffect(() => {
    themeChange(false);
  }, [themeChange]);
  return (
    <div className='ml-5 flex rounded-md p-1.5 hover:text-primary-focus '>
      <label className='swap swap-rotate'>
        <input
          type='checkbox'
          data-toggle-theme='dark,light'
          data-act-class='ACTIVECLASS'
          className='hidden'
        />
        <CgSun className='swap-on h-5 w-5 fill-current' />
        <BiMoon className='swap-off h-5 w-5 fill-current' />
      </label>
    </div>
  );
}
