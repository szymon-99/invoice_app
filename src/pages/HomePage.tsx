import { ControlPanel, InvoicesGrid } from '../components/home';

const HomePage = () => {
  return (
    <div className=' mt-12 max-w-90vw mx-auto  md:w-full md:max-w-4xl md:px-4 md:h-full md:mt-0'>
      <ControlPanel />

      <InvoicesGrid />
    </div>
  );
};

export default HomePage;
