import { useAppSelector } from '@hooks';

const InvoiceCounter = () => {
  const { sortedInvoices, isLoading } = useAppSelector();

  const amount = sortedInvoices.length;
  return (
    <p className='mt-1'>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <span className='hidden md:inline'>
            {amount === 1 ? 'There is ' : amount > 1 ? 'There are ' : null}
          </span>
          <span>
            {amount || 'no'} {` invoice${amount === 1 ? '' : 's'}`}
          </span>
        </>
      )}
    </p>
  );
};

export default InvoiceCounter;
