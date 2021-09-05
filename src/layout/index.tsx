import { FC } from 'react';
import { useState, useLayoutEffect } from 'react';
import Navbar from './Navbar';

const Layout: FC = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  useLayoutEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  useLayoutEffect(() => {
    if (darkTheme) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  const toggleTheme = () => {
    if (!darkTheme) {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  };
  return (
    <div className='transition font-spartan h-full w-full min-h-screen pt-20 md:pl-24 bg-primary'>
      <Navbar toggleTheme={toggleTheme} darkTheme={darkTheme} />
      {children}
    </div>
  );
};

export default Layout;
