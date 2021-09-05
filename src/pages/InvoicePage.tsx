import { useAppSelector, useActions } from '@hooks';
import {
  InvoiceControl,
  EditButtons,
  InvoiceInfo,
} from '@components/invoiceView';
import { ErrorMessage } from '@shared';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import { slideUp } from '@utils/motionVariants';

const InvoicePage = () => {
  const { id } = useParams<{ id: string }>();
  const { setCurrentInvoice } = useActions();
  const { invoices, currentInvoice, isLoading } = useAppSelector();

  useEffect(() => {
    if (invoices.length) {
      setCurrentInvoice(id);
    }
  }, [id, setCurrentInvoice, invoices]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div className=' mt-12 mb-20 max-w-90vw mx-auto  md:w-full md:max-w-4xl md:px-4 md:h-full md:mt-0'>
      {currentInvoice ? (
        <>
          <InvoiceControl />
          <InvoiceInfo />
        </>
      ) : (
        <ErrorMessage />
      )}

      {/* to show fixed buttons on mobile devices */}
      <motion.div
        initial='hidden'
        animate='show'
        exit='exit'
        variants={slideUp}
        className='fixed bottom-0 inset-x-0 bg-white md:hidden py-2 dark:bg-dark-300'
      >
        <EditButtons fixed />
      </motion.div>
    </div>
  );
};

export default InvoicePage;
