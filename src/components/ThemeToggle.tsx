import { useTheme } from 'next-themes';
import { FiSun } from 'react-icons/fi';
import { IoMoon } from 'react-icons/io5';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className='border-none focus:outline-none  dark:text-slate-400 '
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <IoMoon size={18} /> : <FiSun size={18} />}
    </button>
  );
}
