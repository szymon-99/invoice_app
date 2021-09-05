import { useAppSelector } from '@hooks';
const ErrorMessage = () => {
  const { errors } = useAppSelector();
  return (
    <div className='flex w-full items-center justify-center'>
      <h3>{errors}</h3>
      <button>Back home</button>
    </div>
  );
};

export default ErrorMessage;
