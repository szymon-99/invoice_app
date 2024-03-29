import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import logo from '../images/logo.svg';
import avatar from '../images/avatar.jpg';

interface NavProps {
  toggleTheme: () => void;
  darkTheme: boolean;
}

const Navbar: FC<NavProps> = ({ toggleTheme, darkTheme }) => {
  return (
    <div className='flex h-20 overflow-hidden fixed z-50 top-0 inset-x-0 md:left-0 md:right-auto md:rounded-tr-3xl md:w-24 md:flex-col md:h-screen transition bg-dark-200 dark:bg-dark-300'>
      <Link
        to='/'
        tabIndex={1}
        className='relative rounded-r-3xl flex items-center bg-blue-500 px-6 overflow-hidden md:px-0 md:py-8 md:justify-center focus group'
      >
        <span className='absolute rounded-tl-3xl bottom-0 left-0 right-0 bg-blue-300  h-1/2 group-hover:h-0 transition-all duration-300'></span>
        <div className='w-6 h-6  md:h-8 md:w-8 z-10'>
          <img src={logo} alt='logo' className='w-full h-full' />
        </div>
      </Link>

      <div className='flex-1 text-right justify-end items-center flex border-r border-blue-100 border-opacity-20  md:items-end md:justify-center md:border-r-0 md:border-b '>
        <button
          className=' text-white text-xl transition mr-6 md:mr-0 md:mb-6 md:text-2xl focus transform hover:scale-110'
          onClick={() => toggleTheme()}
        >
          {darkTheme ? <FaMoon /> : <FaSun />}
        </button>
      </div>

      <div className=' px-6  flex items-center justify-center md:py-6'>
        <img src={avatar} alt='logo' className=' rounded-full w-10 h-10' />
      </div>
    </div>
  );
};

export default Navbar;
