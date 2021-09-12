import { GoPrimitiveDot } from 'react-icons/go';
import { FC } from 'react';
import { TStatus } from '../../../types';

interface StatusProps {
  status: TStatus;
}

const Status: FC<StatusProps> = ({ status }) => {
  return (
    <div
      className={`font-bold capitalize self-end  py-3 min-w-28 flex items-center justify-center rounded-md text-xs md:self-auto bg-opacity-10 dark:bg-opacity-10 ${
        status === 'draft'
          ? 'bg-dark-200 text-dark-200 dark:bg-blue-100   dark:text-blue-100'
          : status === 'pending'
          ? 'bg-orange text-orange'
          : status === 'paid' && 'text-green bg-green'
      } `}
    >
      <span className='text-base mr-2'>
        <GoPrimitiveDot />
      </span>
      <span>{status}</span>
    </div>
  );
};

export default Status;
