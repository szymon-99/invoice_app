import InvoiceCell from './InvoiceCell';
import { InvoiceBasicInfo } from '../../../types';
import { useAppSelector } from '@hooks';

export default function InvoicesGrid() {
  const { sortedInvoices } = useAppSelector();

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

  return (
    <main>
      <ul className='grid gap-4  mt-16'>
        {invoices.map((invoice, index) => {
          return (
            <InvoiceCell key={invoice.id} {...invoice} index={index + 1} />
          );
        })}
      </ul>
    </main>
  );
}
