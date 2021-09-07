import { useAppSelector } from '@hooks';
import { slideUp } from '@utils/motionVariants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ErrorMessage = () => {
  const { errors } = useAppSelector();
  return (
    <motion.main
      initial='hidden'
      animate='show'
      exit='exit'
      variants={slideUp}
      className='w-full flex items-center justify-center flex-col h-96'
    >
      <h1>{errors}</h1>
      <Link className='btn mt-6  bg-blue-500 text-white' to='/'>
        Go back to home page
      </Link>
    </motion.main>
  );
};

export default ErrorMessage;
