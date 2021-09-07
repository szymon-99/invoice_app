import { motion } from 'framer-motion';
import { FC } from 'react';
import { AppAction } from 'state/actions';

interface BackgroundProps {
  callback: () => AppAction;
}

const Background: FC<BackgroundProps> = ({ callback }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      onClick={() => callback()}
      className='fixed inset-0 bg-dark-900 z-10'
    ></motion.div>
  );
};

export default Background;
