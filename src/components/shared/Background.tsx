import { useAppSelector } from '@hooks';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { AppAction } from 'state/actions';

interface BackgroundProps {
  callback: () => AppAction;
}

const Background: FC<BackgroundProps> = ({ callback, children }) => {
  const { isUpdating } = useAppSelector();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => {
        if (!isUpdating) callback();
      }}
      className='fixed inset-0 bg-dark-900 bg-opacity-50 z-10 grid place-items-center md:pl-20'
    >
      {children}
    </motion.div>
  );
};

export default Background;
