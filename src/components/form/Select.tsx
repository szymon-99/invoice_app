import { FC } from 'react'
import { useField } from 'formik'

interface SelectProps {
  options: string[]
  label: string
  name: string
}

const Select: FC<SelectProps> = ({ options, label, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'select' })

  return (
    <div className='mt-4'>
      <div className='flex justify-between'>
        <label
          htmlFor={field.name}
          className=' font-medium pt-1 capitalize text-blue-600 dark:text-blue-100 text-xs'
        >
          {label}
        </label>
        {meta.touched && meta.error ? (
          <p className='text-red-500 dark:text-red-500 font-light text-xs'>
            {meta.error}
          </p>
        ) : null}
      </div>

      <select
        {...props}
        {...field}
        className='p-4 w-full border  rounded mt-2 text-xs font-bold text-dark-900 dark:text-white outline-none dark:bg-dark-300 border-blue-100 dark:border-dark-100 hover:border-blue-500 dark:hover:border-blue-500 focus:ring-blue-100 dark:focus:ring-blue-500'
      >
        {options.map((value) => {
          return (
            <option key={value} value={value} label={value}>
              {value}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Select
