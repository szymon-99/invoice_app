import { FC } from 'react';

interface ButtonProps {
  callback: () => void;
  type: 'danger' | 'primary' | 'dark' | 'light';
}

const Button: FC<ButtonProps> = ({ children, type, callback }) => {
  return (
    <button
      onClick={() => callback()}
      className={`btn ${
        type === 'danger'
          ? 'text-white bg-red-500 hover:bg-red-100'
          : type === 'primary'
          ? 'text-white bg-blue-500 hover:bg-blue-300'
          : type === 'dark'
          ? 'bg-dark-200 text-gray hover:bg-dark-900 dark:hover:bg-dark-400 dark:hover:text-blue-100'
          : 'text-blue-600 dark:text-blue-100 bg-blue-100 hover:bg-blue-100 hover:bg-opacity-50  dark:bg-dark-100 dark:hover:bg-white dark:hover:text-blue-600'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
