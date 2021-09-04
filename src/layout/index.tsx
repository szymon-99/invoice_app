import { FC } from 'react';
import { useState } from 'react';
import Navbar from './Navbar';

const Layout: FC = ({ children }) => {
  const [theme, setTheme] = useState(true);

  return (
    <div
      className={`transition font-spartan h-full w-full pt-20  md:pl-24 bg-primary ${
        theme ? 'theme-light' : 'theme-dark'
      }`}
    >
      <Navbar setTheme={setTheme} theme={theme} />
      {children}
    </div>
  );
};

export default Layout;
