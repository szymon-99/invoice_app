import { ControlPanel, InvoicesGrid, EmptyView } from '../components/home';
import { useActions, useAppSelector } from '@hooks';
import { Loading } from '@shared';
import { useEffect } from 'react';

const HomePage = () => {
  const { invoices, isLoading, filterMethod, sortedInvoices } =
    useAppSelector();
  const { sortInvoices } = useActions();

  useEffect(() => {
    sortInvoices();
  }, [invoices, filterMethod, sortInvoices]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=' mt-12 max-w-90vw mx-auto  md:w-full md:max-w-4xl md:px-8 md:h-full md:mt-0'>
      <ControlPanel />

      {sortedInvoices.length ? <InvoicesGrid /> : <EmptyView />}
    </div>
  );
};

export default HomePage;
