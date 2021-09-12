import { VscLoading } from 'react-icons/vsc';

const Loading = () => {
  return (
    <div className='flex flex-col min-w-full min-h-screen -m-20 items-center justify-center '>
      <VscLoading className='w-12 h-12 text-blue-500 animate-spin opacity-75 ' />
      <h3 className='mt-3'>Loading...</h3>
    </div>
  );
};

export default Loading;
