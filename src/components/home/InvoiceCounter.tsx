import { useAppSelector } from '@hooks';
import { motion } from 'framer-motion';

const InvoiceCounter = () => {
  const { sortedInvoices, isLoading } = useAppSelector();

  const amount = sortedInvoices.length;

  return isLoading ? null : (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      className='mt-1'
    >
      <span className='hidden md:inline '>
        {amount === 1 ? 'There is ' : amount > 1 ? 'There are ' : null}
      </span>
      <span>
        {amount || 'no'} {` invoice${amount === 1 ? '' : 's'}`}
      </span>
    </motion.p>
  );
};

export default InvoiceCounter;
