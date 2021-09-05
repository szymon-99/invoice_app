import { useAppSelector } from '@hooks';
import EditButtons from './EditButtons';
import Status from '../shared/Status';
import { motion } from 'framer-motion';
import { slideFromLeft } from '@utils/motionVariants';

const InvoiceControl = () => {
  const { currentInvoice } = useAppSelector();

  if (!currentInvoice) return null;
  return (
    <motion.div
      initial='hidden'
      animate='show'
      exit='exit'
      variants={slideFromLeft}
      className='mt-8 p-6 bg-white dark:bg-dark-300 rounded-lg md:flex md:items-center md:justify-between shadow-1 '
    >
      <div className='flex justify-between items-center md:space-x-4'>
        <p>Status</p>

        <Status status={currentInvoice.status} />
      </div>

      <div className='hidden md:inline'>
        <EditButtons />
      </div>
    </motion.div>
  );
};

export default InvoiceControl;
