import { useActions, useAppSelector } from '@hooks';
import Background from './Background';
import { motion } from 'framer-motion';
import { scaleUp } from '@utils/motionVariants';
import { Button } from '@shared';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const Modal = () => {
  const { closeModal, deleteInvoice, startUpdating } = useActions();
  const { currentInvoice } = useAppSelector();
  const history = useHistory();

  useEffect(() => {
    if (!currentInvoice) {
      history.push('/');
    }
    // eslint-disable-next-line
  }, [currentInvoice]);

  return (
    <Background callback={closeModal}>
      <motion.div
        initial='hidden'
        animate='show'
        exit='exit'
        variants={scaleUp}
        className='bg-primaryLight p-8 rounded-lg  w-full max-w-90vw grid gap-3 md:max-w-md md:p-12'
        onClick={(e) => e.stopPropagation()}
      >
        {currentInvoice && (
          <>
            <h3 className=' text-xl md:text-2xl'>Confirm Deletion</h3>
            <p>
              Are you sure you want to delete invoice
              <span> #{currentInvoice._id.substr(0, 6).toUpperCase()}? </span>
              This action cannot be undone.
            </p>
            <div className='flex justify-end space-x-2'>
              <Button type='dark' callback={closeModal}>
                Cancel
              </Button>
              <Button
                type='danger'
                withSpinner
                callback={() => {
                  startUpdating();
                  deleteInvoice(currentInvoice._id);
                }}
              >
                Delete
              </Button>
            </div>
          </>
        )}
      </motion.div>
    </Background>
  );
};

export default Modal;
