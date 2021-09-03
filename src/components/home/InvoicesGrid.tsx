import InvoiceCell from './InvoiceCell';
import { Status } from '@shared';
import { InvoiceBasicInfo } from '../../../types';
import { useAppSelector, useActions } from '@hooks';
import { useEffect } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    // transition: {
    //   staggerChildren: 0.15,
    // },
  },
};

export default function InvoicesGrid() {
  const { sortedInvoices, isLoading, filterMethod } = useAppSelector();
  const { sortInvoices } = useActions();

  useEffect(() => {
    sortInvoices();
  }, [filterMethod, sortInvoices]);

  const invoices: InvoiceBasicInfo[] = sortedInvoices.map((invoice) => {
    const {
      _id: id,
      clientInfo: { name },
      paymentDue: date,
      total: price,
      status,
    } = invoice;
    return { id, name, date, price, status };
  });

  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <motion.ul
      initial='hidden'
      animate='show'
      variants={container}
      className='grid gap-4  mt-16'
    >
      {/* {invoices.map((invoice) => {
        return <InvoiceCell key={invoice.id} {...invoice} />;
      })} */}
      {invoices.map(({ id, date, name, price, status }, i) => {
        return (
          <motion.li
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: i * 0.1,
                duration: 0.3,
              },
            }}
            exit={{
              y: 10,
              opacity: 0,
              transition: {
                type: 'spring',
                delay: 0.05 * i,
                duration: 0.45,
              },
            }}
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

            <span className='hidden  ml-5 text-base text-blue-300 md:inline'></span>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
