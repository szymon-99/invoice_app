import { SummaryItem } from '../../../types';
import React, { FC } from 'react';

interface SummaryProps {
  items: SummaryItem[];
}

const Summary: FC<SummaryProps> = ({ items }) => {
  return (
    <>
      {/* on tablet end */}
      <div className='hidden md:grid grid-cols-5 gap-8 justify-items-end'>
        <p className=' col-start-1 col-end-3 justify-self-start'>Item Name</p>
        <p>QTY.</p>
        <p>Price</p>
        <p>Total</p>

        {items.map((item) => {
          const { qty, price, name } = item;
          return (
            <React.Fragment key={name}>
              <p className='col-start-1 col-end-3 font-bold dark:text-white text-dark-900 justify-self-start'>
                {name}
              </p>
              <p className=' font-bold dark:text-white'>{qty}</p>
              <p className=' font-bold dark:text-white'>{price}</p>
              <p className=' font-bold dark:text-white text-dark-900'>
                {Number(qty) * Number(price)}
              </p>
            </React.Fragment>
          );
        })}
      </div>

      {/* on mobile */}
      <div className='grid gap-6 md:hidden'>
        {items.map((item) => {
          const { qty, name, price } = item;
          return (
            <div key={name} className='flex justify-between items-center'>
              <div>
                <p className='font-bold text-dark-900 dark:text-white mb-2'>
                  {name}
                </p>
                <p className='font-bold text-blue-600 dark:text-blue-600'>
                  <span>{qty}</span> x <span>{price}</span>
                </p>
              </div>
              <p className='font-bold text-dark-900 dark:text-white'>
                {Number(qty) * Number(price)}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Summary;
