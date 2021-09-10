import { FC } from 'react';
import { FaTrash } from 'react-icons/fa';
import Input from './Input';
import { ErrorMessage } from 'formik';
import { motion } from 'framer-motion';
import { slideUp } from '@utils/motionVariants';

interface InvoiceItemProps {
  index: number;
  remove: (index: number) => void;
  values: {
    qty: string;
    price: string;
  };
}

const InvoiceItem: FC<InvoiceItemProps> = ({
  remove,
  index,
  values: { price, qty },
}) => {
  return (
    <motion.div
      initial='hidden'
      animate='show'
      variants={slideUp}
      className='grid gap-x-4 grid-cols-10 md:grid-cols-12'
    >
      <div className=' col-span-full md:col-span-4'>
        <Input itemList label='item name' name={`itemList[${index}].name`} />
      </div>
      <div className=' col-span-3 md:col-span-2'>
        <Input
          itemList
          qty
          label='Qty'
          type='number'
          name={`itemList[${index}].qty`}
        />
      </div>
      <div className='col-span-3 md:col-span-3'>
        <Input
          itemList
          price
          label='Price'
          type='number'
          name={`itemList[${index}].price`}
        />
      </div>
      <div className='text-xs  text-gray font-bold dark:text-light col-span-2 grid  md:col-span-2'>
        <span className='mt-4 md:hidden'>Total</span>
        <span className='mt-2  md:mt-6'>{Number(qty) * Number(price)}</span>
      </div>

      <button
        type='button'
        onClick={() => remove(index)}
        className='col-auto self-end flex justify-center py-4 text-lg transition focus text-fontSecondary hover:text-red-500 cursor-pointer'
      >
        <FaTrash />
      </button>

      <div className='grid col-span-full space-y-2'>
        <ErrorMessage name={`itemList[${index}.name]`} component={ItemError} />
        <ErrorMessage name={`itemList[${index}.qty]`} component={ItemError} />
        <ErrorMessage name={`itemList[${index}.price]`} component={ItemError} />
      </div>
    </motion.div>
  );
};

const ItemError: FC = ({ children }) => {
  return (
    <p className='text-xs font-bold text-red-500 dark:text-red-500'>
      {children}
    </p>
  );
};

export default InvoiceItem;
