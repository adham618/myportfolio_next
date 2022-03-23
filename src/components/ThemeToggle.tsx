import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className='border-none focus:outline-none  dark:text-slate-400 '
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
    </button>
  );
}
