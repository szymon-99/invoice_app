import InvoiceCell from './InvoiceCell';
import { Status } from '@shared';
import { InvoiceBasicInfo } from '../../../types';
import { useAppSelector, useActions } from '@hooks';
import { useEffect } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

export default function InvoicesGrid() {
  const { sortedInvoices, isLoading, filterMethod } = useAppSelector();
  const { sortInvoices } = useActions();

  useEffect(() => {
    sortInvoices();
  }, [filterMethod, sortInvoices]);

  const invoices: InvoiceBasicInfo[] = sortedInvoices.map((invoice) => {
    const {
      _id: id,
      clientInfo: { name },
      paymentDue: date,
      total: price,
      status,
    } = invoice;
    return { id, name, date, price, status };
  });

  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <main>
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 10 }}
        className='grid gap-4  mt-16'
      >
        {invoices.map((invoice, index) => {
          return (
            <InvoiceCell key={invoice.id} {...invoice} index={index + 1} />
          );
        })}
      </motion.ul>
    </main>
  );
}
