import { ControlPanel, InvoicesGrid, EmptyView } from '../components/home';
import { useAppSelector } from '@hooks';

const HomePage = () => {
  const { sortedInvoices, isLoading } = useAppSelector();

  if (isLoading) {
    return (
      <main className='flex justify-center items-center h-96'>
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <div className=' mt-12 max-w-90vw mx-auto  md:w-full md:max-w-4xl md:px-8 md:h-full md:mt-0'>
      <ControlPanel />

      {sortedInvoices.length ? <InvoicesGrid /> : <EmptyView />}
    </div>
  );
};

export default HomePage;
