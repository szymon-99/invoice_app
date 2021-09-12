import { useAppSelector } from '@hooks';
import { FC } from 'react';
import { VscLoading } from 'react-icons/vsc';

interface ButtonProps {
  callback: () => void;
  withSpinner?: true;
  type: 'danger' | 'primary' | 'dark' | 'light';
}

const Button: FC<ButtonProps> = ({ children, type, callback, withSpinner }) => {
  const { isUpdating } = useAppSelector();

  return (
    <button
      onClick={() => callback()}
      className={`btn relative ${
        isUpdating && 'pointer-events-none opacity-90'
      }${
        type === 'danger'
          ? 'text-white bg-red-500 hover:bg-red-100'
          : type === 'primary'
          ? 'text-white bg-blue-500 hover:bg-blue-300'
          : type === 'dark'
          ? 'bg-dark-200 text-gray hover:bg-dark-900  dark:bg-dark-900 dark:hover:bg-dark-200 dark:hover:text-blue-100'
          : 'text-blue-600  bg-blue-100 hover:ring-2 ring-blue-300 hover:bg-primary dark:hover:bg-opacity-50 dark:text-blue-10  dark:bg-dark-100 dark:hover:text-blue-600'
      }`}
    >
      <span
        className={`${
          withSpinner && isUpdating && 'text-white text-opacity-0'
        }`}
      >
        {children}
      </span>

      {withSpinner && isUpdating && (
        <span className=' absolute grid place-items-center inset-0'>
          <VscLoading className='animate-spin text-xl' />
        </span>
      )}
    </button>
  );
};

export default Button;
