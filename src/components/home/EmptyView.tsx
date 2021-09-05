import { motion } from 'framer-motion';
import emptyImg from '../../images/illustration-empty.svg';

export default function InvoicesEmpty() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className=' mt-28 grid place-items-center text-center md:mt-32'
    >
      <img src={emptyImg} alt='empty application' />
      <h1 className='mt-10'>There is nothing there</h1>
      <p className=' mt-7'>
        Create an invoice by clicking the <br />
        <span className='font-bold'> New</span> button and get started
      </p>
    </motion.div>
  );
}
