import { useTheme } from 'next-themes';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label='theme toggle'
      className='p-2 hover:rounded-full hover:bg-slate-200 focus:outline-none  dark:text-slate-400 dark:hover:bg-opacity-40'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <BsFillMoonStarsFill size={15} />
      ) : (
        <BsFillSunFill size={18} />
      )}
    </button>
  );
}
