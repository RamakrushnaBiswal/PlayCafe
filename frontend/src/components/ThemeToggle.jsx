import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import useDarkMode from '../hooks/useDarkMode';
import "../../src/index.css";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  return (
    <div className="flex flex-row justify-center items-center"> 
                    <label className="switch"> 
                        <input type="checkbox"
                        onChange={() => setIsDarkMode(isDarkMode === 'dark' ? 'light' : 'dark')}
                         /> 
                            <span className="slider"></span> 
                    </label>

                  

                </div>
  );
};

export default ThemeSwitcher;

