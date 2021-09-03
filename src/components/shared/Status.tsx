import { GoPrimitiveDot } from 'react-icons/go';
import { FC } from 'react';
import { TStatus } from '../../../types';

interface StatusProps {
  status: TStatus;
}
type ColorClasses = {
  [key in TStatus]: String;
};

const Status: FC<StatusProps> = ({ status }) => {
  const colors: ColorClasses = {
    pending: 'orange',
    draft: 'lightGray',
    paid: 'green',
  };

  return (
    <div
      className={`rounded-md text-xs bg-${colors[status]}  text-${
        colors[status]
      } ${
        status === 'draft'
          ? 'dark:bg-blue-100 dark:bg-opacity-10  dark:text-fontPrimary'
          : null
      } bg-opacity-10 font-bold capitalize self-end  py-3 min-w-28 flex items-center justify-center md:self-auto`}
    >
      <span className='text-base mr-2'>
        <GoPrimitiveDot />
      </span>
      <span>{status}</span>
    </div>
  );
};

export default Status;
