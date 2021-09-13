import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className=' mt-32 grid place-items-center'>
      <h1 className='mb-6 md:mb-12'>Sorry, this page doesn't exist</h1>

      <Link to='/' className='btn bg-blue-300 text-white hover:bg-opacity-80'>
        Back Home
      </Link>
    </main>
  );
};

export default NotFound;
