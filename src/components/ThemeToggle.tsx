import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';

export const useLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  return loaded;
};

export default function ThemeToggle() {
  const loaded = useLoaded();
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label='theme toggle'
      className='p-2 hover:rounded-full hover:bg-slate-200 focus:outline-none  dark:text-slate-400 dark:hover:bg-opacity-40'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' && loaded ? (
        <BsMoonStarsFill size={18} />
      ) : (
        <BsFillSunFill size={18} />
      )}
    </button>
  );
}
