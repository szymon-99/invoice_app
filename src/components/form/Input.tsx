import { useField } from 'formik'
import { FC } from 'react'

interface TextInputProps {
  label: string
  name: string
  placeholder?: string
  type?: 'email' | 'number' | 'date'
  itemList?: true
}

const TextInput: FC<TextInputProps> = ({ label, itemList, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className={` mt-4 ${itemList ? 'md:mt-0' : ''}`}>
      <div className='flex justify-between'>
        <label
          htmlFor={field.name}
          className={`font-medium pt-1 transition capitalize text-blue-600 dark:text-blue-100 text-xs
          ${itemList && 'md:hidden'}`}
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
  )
}

export default TextInput
