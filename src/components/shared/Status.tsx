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
    draft: 'optionBgLight',
    paid: 'green',
  };

  return (
    <div
      className={`rounded-md text-xs bg-${colors[status]}  text-${colors[status]} bg-opacity-10 font-bold capitalize self-end  py-3 min-w-28 flex items-center justify-center md:self-auto`}
    >
      <span className='text-base mr-2'>
        <GoPrimitiveDot />
      </span>
      <span>{status}</span>
    </div>
  );
};

export default Status;
