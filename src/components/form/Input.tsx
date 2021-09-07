import { formatPrice, formatQty } from '@utils/helpers';
import { useField } from 'formik';
import { FC, ChangeEvent } from 'react';

interface TextInputProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: 'email' | 'number' | 'date';
  itemList?: true;
  price?: true;
  qty?: true;
}

const TextInput: FC<TextInputProps> = ({
  label,
  qty,
  price,
  itemList,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);

  // const { setValue } = helpers

  // if (qty) {
  //   field.onChange = (e: ChangeEvent<any>) =>
  //     setValue(formatQty(e.target.value))
  // }
  // if (price) {
  //   field.onChange = (e: ChangeEvent<any>) =>
  //     setValue(formatPrice(e.target.value))
  // }

  return (
    <div className={`${itemList ? 'mt-0' : 'mt-4'}`}>
      <div className='flex justify-between'>
        <label
          htmlFor={field.name}
          className='font-medium transition capitalize text-blue-600 dark:text-blue-100 text-xs'
        >
          {label}
        </label>

        {!itemList && meta.touched && meta.error ? (
          <p className='text-red-500 dark:text-red-500 font-light text-xxs'>
            {meta.error}
          </p>
        ) : null}
      </div>
      <input
        className={` w-full p-4 border  rounded mt-2 text-xs font-bold text-dark-900 transition  dark:text-white outline-none dark:bg-dark-300 ${
          meta.touched && meta.error
            ? 'border-red-500 dark:border-red-500 focus:ring-red-500 dark:focus:ring-red-500'
            : 'border-blue-100 dark:border-dark-100 hover:border-blue-500 dark:hover:border-blue-500 focus:ring-blue-100 dark:focus:ring-blue-500'
        }`}
        type={props.type || 'text'}
        {...props}
        {...field}
      />
    </div>
  );
};

export default TextInput;
