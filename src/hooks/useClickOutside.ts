import { handleClickOutside } from '@utils/helpers';
import { useEffect } from 'react';

export const useClickOutside = <T extends Element>(
  callback: (bool: boolean) => void,
  ref: React.RefObject<T>
) => {
  return useEffect(() => {
    window.addEventListener('mousedown', (e) =>
      handleClickOutside(e, callback, ref)
    );
    return () =>
      window.removeEventListener('mousedown', (e) =>
        handleClickOutside(e, callback, ref)
      );
  }, [callback, ref]);
};
