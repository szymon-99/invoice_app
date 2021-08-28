import { FC } from 'react';
import { useState } from 'react';
import Navbar from './Navbar';

const Layout: FC = ({ children }) => {
  const [theme, setTheme] = useState(true);

  return (
    <div
      className={`transition font-spartan h-full w-full mt-20 md:h-screen md:ml-24 md:mt-16 ${
        theme ? 'theme-light' : 'theme-dark'
      }`}
    >
      <Navbar setTheme={setTheme} theme={theme} />
      {children}
    </div>
  );
};

export default Layout;
