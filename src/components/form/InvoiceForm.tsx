import { Back, Background } from '@shared';
import { motion } from 'framer-motion';
import { formVariants } from '@utils/motionVariants';
import { useActions, useAppSelector } from '@hooks';
import Form from './Form';
import { initialValues } from '@utils/constants';

const InvoiceForm = () => {
  const { isEditing, currentInvoice } = useAppSelector();
  const { closeForm } = useActions();

  return (
    <>
      <Background callback={closeForm} />

      <motion.div
        initial='hidden'
        animate='show'
        exit='exit'
        variants={formVariants}
        className='absolute top-18 inset-x-0 bg-white z-10 dark:bg-dark-400 md:max-w-3xl md:fixed md:top-0 md:pl-24 md:h-screen md:max-h-screen md:rounded-r-xl'
      >
        <div className='md:max-h-full overflow-scroll relative'>
          <div className='px-6 py-8 md:px-14'>
            <Back form />

            <h1 className='mt-4'>New Invoice</h1>

            <Form
              values={
                isEditing && currentInvoice ? currentInvoice : initialValues
              }
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default InvoiceForm;
