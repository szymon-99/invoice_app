import { useAppSelector, useActions } from '@hooks';
import {
  InvoiceControl,
  EditButtons,
  InvoiceInfo,
} from '@components/invoiceView';
import { Back, ErrorMessage, Loading } from '@shared';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import { slideUp } from '@utils/motionVariants';

const InvoicePage = () => {
  const { id } = useParams<{ id: string }>();
  const { setCurrentInvoice } = useActions();
  const { currentInvoice, isLoading, errors } = useAppSelector();

  useEffect(() => {
    if (!isLoading) {
      setCurrentInvoice(id);
    }
  }, [id, setCurrentInvoice, isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=' mt-12 mb-20 max-w-90vw mx-auto  md:w-full md:max-w-4xl md:px-4 md:h-full md:mt-0'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 0.2,
          },
        }}
        exit={{
          x: -30,
          opacity: 0,
          transition: {
            duration: 0.35,
          },
        }}
      >
        <Back />
      </motion.div>

      {currentInvoice && (
        <>
          <InvoiceControl />
          <InvoiceInfo />
        </>
      )}

      {errors && <ErrorMessage />}

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
