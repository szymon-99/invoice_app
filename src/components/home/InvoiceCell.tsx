import { Status } from '@shared';
import { useHistory } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { FC } from 'react';
import { InvoiceBasicInfo } from '../../../types';
import { motion } from 'framer-motion';

interface InvoiceCellProps extends InvoiceBasicInfo {
  index: number;
}

const InvoiceCell: FC<InvoiceCellProps> = ({
  id,
  name,
  status,
  total,
  date,
  index,
}) => {
  const history = useHistory();

  return (
    <motion.li
      onClick={() => history.push(`/invoices/${id}`)}
      onKeyPress={() => history.push(`/invoices/${id}`)}
      tabIndex={0}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: index * 0.09,
          easings: ['easeInOut'],
        },
      }}
      exit={{
        opacity: 0,
        y: 15,
        transition: {
          delay: index * 0.1,
          easings: ['easeOut'],
        },
      }}
      className='py-4 px-6 cursor-pointer text-left bg-primaryLight rounded-lg transition duration-300 md:flex md:items-center hover:ring-1 ring-blue-500 focus:ring-1 focus:outline-none shadow-1'
    >
      <div className='flex flex-wrap justify-between'>
        <h3>
          <span className='text-gray'>#</span>
          {id.substring(0, 6).toUpperCase()}
        </h3>
        <p className=' md:hidden break-all'>{name}</p>
      </div>

      <div className='mt-6 flex justify-between items-center md:ml-7 md:mt-0 md:grid  md:grid-cols-12 md:gap-8  '>
        <div className='grid  md:col-span-9 md:flex md:items-center md:space-x-8'>
          <p className=' min-w-max md:justify-self-start'>
            <span>Due </span>
            {new Date(date)
              .toUTCString()
              .split(' ')
              .splice(0, 3)
              .join(' ')
              .replace(',', '')}
          </p>
          <p className='hidden text-fontSecondary md:block md:flex-grow overflow-x-scroll'>
            {name}
          </p>
          <p className=' mt-2 font-bold text-sm lg:text-base text-fontPrimary md:mt-0 overflow-x-scroll'>
            {`$${total.toFixed(2)}`}
          </p>
        </div>
        <Status status={status} />
      </div>

      <span className='hidden ml-5 text-lg text-blue-500 md:inline'>
        <FiChevronRight />
      </span>
    </motion.li>
  );
};

export default InvoiceCell;
