import { FaSun, FaMoon } from 'react-icons/fa';
import useDarkMode from '../hooks/useDarkMode';
import "../../src/index.css";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useDarkMode();
  const isDarkMode = theme === 'dark';

  return (
    <div className="flex flex-row justify-center items-center">
      <label className="relative inline-block w-16 h-9">
  <input
    type="checkbox"
    className="sr-only peer"
    checked={isDarkMode}
    onChange={() => setTheme(isDarkMode ? 'light' : 'dark')}
  />
  <span className="block w-full h-full bg-blue-500 rounded-3xl border-2 border-blue-400 cursor-pointer peer-checked:bg-slate-800 peer-checked:border-blue-400 transition-colors duration-400"></span>

  {/* Sun Icon for Light Mode */}
  <span className="absolute top-1/2 left-[0.3em] w-4 h-4 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full transform -translate-y-1/2 transition-all duration-400 opacity-100 peer-checked:opacity-0"></span>

  {/* Moon Icon for Dark Mode */}
  <span className="absolute top-1/2 left-[calc(100%-1.3em)] w-4 h-4 bg-transparent rounded-full transform -translate-y-1/2 transition-all duration-400 opacity-0 peer-checked:opacity-100 peer-checked:shadow-[inset_-3px_-2px_5px_-2px_#8983f7,inset_-8px_-4px_0_0_#a3dafb]"></span>
</label>


      </div>
  );
};

export default ThemeSwitcher;
