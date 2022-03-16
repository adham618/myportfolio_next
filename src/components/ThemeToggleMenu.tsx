import * as React from 'react';
import { useEffect } from 'react';

export default function ThemeToggle() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { themeChange } = require('theme-change');
  useEffect(() => {
    themeChange(false);
  }, [themeChange]);
  return (
    <div className='m-2 flex w-48'>
      <select data-choose-theme>
        <option value=''>Default</option>
        <option value='night'>Dark</option>
        <option value='light'>Light</option>
      </select>
    </div>
  );
}
