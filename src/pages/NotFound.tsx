import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Not found</h1>
      <Link to='/'>
        <button className='btn'>Back home</button>
      </Link>
    </div>
  );
};

export default NotFound;
