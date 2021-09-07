import { useState, useRef, useEffect } from 'react';
import { BiCheck, BiChevronDown } from 'react-icons/bi';
import { useActions, useClickOutside } from '@hooks';
import { filterOptions } from '@utils/constants';
import { FilterOptions } from '../../../types';
import { motion, AnimatePresence } from 'framer-motion';

const FilterButton = () => {
  const [value, setValue] = useState<FilterOptions>(filterOptions[0]);
  const [show, setShow] = useState(false);
  const radioRef = useRef<HTMLDivElement>(null);
  const { setFilter, sortInvoices } = useActions();

  useEffect(() => {
    setFilter(value);
    sortInvoices();
  }, [value, setFilter, sortInvoices]);

  useClickOutside(setShow, radioRef);

  return (
    <div className='flex justify-end text-xs relative' ref={radioRef}>
      <button
        onClick={() => setShow(!show)}
        className='font-bold flex items-center focus  p-2 rounded-lg group text-fontPrimary'
      >
        Filter
        <span className='hidden  md:ml-1 md:inline'> by status</span>
        <span
          className={`text-xl font-bold -mt-1 ml-1 text-blue-500 transition duration-300 transform group-hover:scale-125 ${
            show && 'rotate-180'
          } `}
        >
          <BiChevronDown />
        </span>
      </button>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
            className='absolute z-10 w-40 top-0 mt-9 p-6 md:w-full shadow-xl rounded-lg bg-primaryLight'
          >
            {filterOptions.map((option) => {
              return (
                <button
                  key={option}
                  className='flex items-center p-2 focus cursor-pointer group w-full'
                  onClick={() => setValue(option)}
                >
                  <span
                    className={`flex justify-center items-center w-4 h-4 mr-4 ring-blue-500 group-hover:ring-1 transition-all duration-300 rounded-sm ${
                      option === value
                        ? 'bg-blue-500'
                        : ' bg-blue-100 dark:bg-dark-400'
                    }`}
                  >
                    {option === value && (
                      <span className='text-lg font-bold text-white'>
                        {<BiCheck />}
                      </span>
                    )}
                  </span>
                  <span className='capitalize font-bold text-fontPrimary'>
                    {option}
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterButton;
