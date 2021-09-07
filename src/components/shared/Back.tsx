import { FC } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { useHistory } from 'react-router';
import { useActions } from '@hooks';

interface BackProps {
  form?: true;
}

const Back: FC<BackProps> = ({ form }) => {
  const history = useHistory();
  const { closeForm } = useActions();

  const handleClick = () => {
    if (form) {
      closeForm();
      return;
    }
    history.push('/');
  };

  return (
    <button
      className={`focus text-xs inline-flex items-center  rounded-md transition hover:text-blue-300
     dark:hover:text-blue-300  font-bold text-dark-400 dark:text-white px-1 group  ${
       form && 'md:hidden'
     }`}
      onClick={handleClick}
    >
      <span className='text-xl font-bold text-blue-300 mr-2  group-hover:animate-ping'>
        <BiChevronLeft />
      </span>
      Go Back
    </button>
  );
};

export default Back;
