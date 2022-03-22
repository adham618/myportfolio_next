import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className='rounded-md p-2.5  hover:text-primary-300 focus:outline-none  focus-visible:text-primary-300  dark:text-white dark:hover:text-primary-300 dark:focus-visible:text-primary-300'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
}
