import { bindActionCreators } from 'redux';
import { ActionCreators, AppDispatch } from '../state';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return useMemo(() => {
    return bindActionCreators(ActionCreators, dispatch);
  }, [dispatch]);
};
