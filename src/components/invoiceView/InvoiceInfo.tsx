import { useAppSelector } from '@hooks';
import { formatDate } from '@utils/helpers';
import { slideFromLeft } from '@utils/motionVariants';
import { motion } from 'framer-motion';
import Summary from './Summary';

const InvoiceInfo = () => {
  const { currentInvoice } = useAppSelector();

  if (!currentInvoice) return null;

  const {
    _id,
    itemList,
    userInfo,
    clientInfo,
    desc,
    paymentDue,
    createdAt,
    total,
  } = currentInvoice;
  return (
    <motion.main
      initial='hidden'
      animate='show'
      exit='exit'
      variants={slideFromLeft}
      className=' mt-4 bg-white dark:bg-dark-300 rounded-lg p-6 shadow-1  md:p-8 lg:p-12'
    >
      <div className='md:flex md:justify-between'>
        <div>
          <h1 className='text-lg'>
            <span className='text-fontSecondary'>#</span>
            {_id.substring(0, 6).toUpperCase()}
          </h1>
          <p className='mt-1'>{desc}</p>
        </div>

        <div className='mt-7 md:mt-0'>
          <p>{userInfo.street}</p>
          <p>{userInfo.city}</p>
          <p>{userInfo.postCode}</p>
          <p>{userInfo.country}</p>
        </div>
      </div>

      <div className=' md:grid  mt-8 md:gap-9'>
        <div className=' grid grid-cols-2 md:gap-9'>
          <div>
            <p>Invoice Date</p>
            <p className='text-fontPrimary font-bold text-base md:text-lg'>
              {formatDate(new Date(createdAt))}
            </p>

            <p className='mt-8'>Payment Due</p>
            <p className='text-fontPrimary font-bold text-base md:text-lg'>
              {formatDate(new Date(paymentDue))}
            </p>
          </div>

          <div>
            <p>Bill To</p>
            <p className='text-fontPrimary font-bold text-base md:text-lg max-w-full break-words'>
              {clientInfo.name}
            </p>
            <div className=' mt-8'>
              <p>{clientInfo.street}</p>
              <p>{clientInfo.city}</p>
              <p>{clientInfo.postCode}</p>
              <p>{clientInfo.country}</p>
            </div>
          </div>
        </div>

        <div className=' mt-8 md:mt-0'>
          <p>Sent to</p>
          <p className='text-fontPrimary font-bold text-base md:text-lg'>
            {clientInfo.email}
          </p>
        </div>
      </div>

      <div className=' mt-10 rounded-lg md:mt-11 overflow-hidden'>
        <div className='p-6  bg-lightBlue dark:bg-dark-100 md:p-8'>
          <Summary items={itemList} />
        </div>

        <div className='p-6 bg-dark-200 dark:bg-dark-900 flex justify-between items-center md:px-8'>
          <p className='text-white'>Grand total</p>
          <p className='font-bold text-lg text-white '>$ {total.toFixed(2)}</p>
        </div>
      </div>
    </motion.main>
  );
};

export default InvoiceInfo;
