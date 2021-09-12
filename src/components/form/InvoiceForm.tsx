import { Background } from '@shared';
import { motion } from 'framer-motion';
import { formVariants } from '@utils/motionVariants';
import { useActions } from '@hooks';
import { FC } from 'react';
import EditForm from './EditForm';
import AddForm from './AddForm';

interface InvoiceFormProps {
  isEditing: boolean;
}

const InvoiceForm: FC<InvoiceFormProps> = ({ isEditing }) => {
  const { closeForm } = useActions();

  return (
    <>
      <Background callback={closeForm} />

      <motion.div
        initial='hidden'
        animate='show'
        exit='exit'
        variants={formVariants}
        className='fixed pt-20 inset-x-0 top-0 bg-white z-10 dark:bg-dark-400 md:max-w-3xl md:pt-0  md:pl-24 h-screen max-h-screen md:rounded-r-xl'
      >
        {isEditing ? <EditForm /> : <AddForm />}
      </motion.div>
    </>
  );
};

export default InvoiceForm;
