import InvoiceItem from './InvoiceItem';
import { FieldArray } from 'formik';
import { InvoiceClientInformations } from '../../../types';
import { AnimatePresence } from 'framer-motion';

const ItemList = () => {
  return (
    <div className='mt-6'>
      <FieldArray name='itemList'>
        {({ form: { values }, ...helpers }) => {
          const items = values as InvoiceClientInformations;
          return (
            <div className='grid gap-y-2'>
              <AnimatePresence>
                {items.itemList &&
                  items.itemList.length > 0 &&
                  items.itemList.map((item, index) => {
                    const { price, qty } = item;

                    return (
                      <InvoiceItem
                        key={index}
                        index={index}
                        remove={helpers.remove}
                        values={{ price, qty }}
                      />
                    );
                  })}
              </AnimatePresence>

              <button
                type='button'
                className=' mt-2 rounded-3xl flex w-full justify-center py-4 bg-lightBlue focus text-blue-600 dark:text-light dark:bg-dark-300 hover:bg-blue-100 dark:hover:bg-dark-900 dark:hover:text-blue-600 transition'
                onClick={() =>
                  helpers.push({ name: '', qty: '0', price: '0.00' })
                }
              >
                + Add new item
              </button>
            </div>
          );
        }}
      </FieldArray>
    </div>
  );
};

export default ItemList;
