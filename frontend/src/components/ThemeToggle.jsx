import useDarkMode from '../hooks/useDarkMode';

const ThemeToggle = () => {
  const [theme, setTheme] = useDarkMode();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 border rounded-md"
    >
      {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
