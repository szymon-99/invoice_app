import { useActions } from '@hooks';
import { slideFromLeft } from '@utils/motionVariants';
import { motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';
import FilterButton from './FilterButton';
import InvoiceCounter from './InvoiceCounter';

const ControlPanel = () => {
  const { openForm } = useActions();

  return (
    <motion.div
      initial='hidden'
      animate='show'
      exit='exit'
      variants={slideFromLeft}
      className='grid grid-cols-3 items-center max-w-full'
    >
      <div>
        <h1>Invoices</h1>

        <InvoiceCounter />
      </div>

      <FilterButton />

      <button
        onClick={openForm}
        className='rounded-3xl p-1.5 bg-blue-500 transform hover:bg-opacity-80 hover:scale-105 transition text-xs font-bold flex items-center justify-self-end md:p-2 focus '
      >
        <span className=' p-2 md:p-3 rounded-full bg-white mr-2  md:mr-4'>
          <FaPlus className='text-blue-500 ' />
        </span>
        <span className='mr-1 md:mr-2 text-white'>
          New <span className='hidden md:inline'>Invoice</span>
        </span>
      </button>
    </motion.div>
  );
};

export default ControlPanel;
