import { FaSun, FaMoon } from 'react-icons/fa';
import useDarkMode from '../hooks/useDarkMode';
import "../../src/index.css";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useDarkMode();
  const isDarkMode = theme === 'dark';

  return (
    <div className="flex flex-row justify-center items-center">
      <label className="switch">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={() => setTheme(isDarkMode ? 'light' : 'dark')}
        />
        <span className="slider"></span>
      </label>
      </div>
  );
};

export default ThemeSwitcher;
