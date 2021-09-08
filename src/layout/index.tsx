import { FC } from 'react';
import { useState, useLayoutEffect, useEffect } from 'react';
import Navbar from './Navbar';
import { useAppSelector } from '@hooks';

const Layout: FC = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const { isFormOpen } = useAppSelector();

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

  useEffect(() => {
    if (isFormOpen) {
      document.body.classList.add('scrollLock');
    } else {
      document.body.classList.remove('scrollLock');
    }
  }, [isFormOpen]);

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
