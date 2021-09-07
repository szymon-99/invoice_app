import { Back, Background } from '@shared';
import { motion } from 'framer-motion';
import { formVariants } from '@utils/motionVariants';
import { useActions, useAppSelector } from '@hooks';

const InvoiceForm = () => {
  const { isEditing } = useAppSelector();
  const { closeForm } = useActions();

  return (
    <>
      <Background callback={closeForm} />
      <motion.div
        initial='hidden'
        animate='show'
        exit='exit'
        variants={formVariants}
        className='absolute top-18 inset-x-0 bg-white z-10 dark:bg-dark-400 md:max-w-2xl  md:top-0 md:pl-24 md:h-screen md:rounded-r-xl  lg:max-w-3xl'
      >
        <div className='px-6 py-8 sm:px-8  md:px-14'>
          <Back form />

          <h1 className='mt-4 md:mt-0'>New Invoice</h1>
        </div>
      </motion.div>
    </>
  );
};

export default InvoiceForm;
