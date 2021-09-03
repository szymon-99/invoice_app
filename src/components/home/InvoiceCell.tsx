import { Status } from '@shared';
import { useHistory } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { FC } from 'react';
import { InvoiceBasicInfo } from '../../../types';
import { motion } from 'framer-motion';

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: 'Spring',
      damping: 0,
      stiffness: 0,
    },
  },
};

const InvoiceCell: FC<InvoiceBasicInfo> = ({
  id,
  name,
  status,
  price,
  date,
}) => {
  const history = useHistory();

  return (
    <motion.li
      onClick={() => history.push(`/invoices/${id}`)}
      tabIndex={0}
      layout
      variants={item}
      className='py-4 px-6 cursor-pointer text-left  bg-white rounded-lg dark:bg-dark-100 transition duration-300 md:flex md:items-center hover:ring-1 ring-blue-300 focus:ring-1 focus:outline-none shadow-1'
    >
      <div className='flex justify-between'>
        <h3>
          <span className='text-gray'>#</span>
          {id.substring(0, 6).toUpperCase()}
        </h3>
        <p className=' md:hidden'>{name}</p>
      </div>

      <div className='mt-6 flex justify-between items-center md:ml-7 md:mt-0 md:grid  md:grid-cols-12 md:gap-8  '>
        <div className='grid md:col-span-9 md:flex md:items-center md:space-x-8'>
          <p className=' md:justify-self-start'>
            Due{' '}
            {new Date(date)
              .toUTCString()
              .split(' ')
              .splice(0, 3)
              .join(' ')
              .replace(',', '')}
          </p>
          <p className='hidden md:block md:flex-grow'>{name}</p>
          <p className=' mt-2 font-bold text-sm md:text-base text-dark-900 dark:text-white md:mt-0  '>
            {`$${price}`}
          </p>
        </div>
        <Status status={status} />
      </div>

      <span className='hidden  ml-5 text-base text-blue-300 md:inline'>
        <FiChevronRight />
      </span>
    </motion.li>
  );
};

export default InvoiceCell;
