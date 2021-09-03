import { useSelector } from 'react-redux';
import { RootState } from 'state';

const AppSelector = (state: RootState) => state;
export const useAppSelector = () => useSelector(AppSelector);
