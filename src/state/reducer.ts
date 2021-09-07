import { InvoiceApiResponse, FilterOptions } from '../../types';
import { ActionType } from './action-types';
import { Action } from './actions';

export interface AppState {
  invoices: InvoiceApiResponse[];
  sortedInvoices: InvoiceApiResponse[];
  currentInvoice: InvoiceApiResponse | null;
  isEditing: boolean;
  isLoading: boolean;
  isFormOpen: boolean;
  filterMethod: FilterOptions;
  errors: null | string;
}
const initialState: AppState = {
  invoices: [],
  sortedInvoices: [],
  currentInvoice: null,
  isEditing: false,
  isFormOpen: false,
  isLoading: true,
  filterMethod: 'all',
  errors: null,
};

export const reducer = (state = initialState, action: Action): AppState => {
  state.errors = null;
  if (action.type === ActionType.GET_INVOICES) {
    return {
      ...state,
      invoices: [...action.payload.invoices],
      sortedInvoices: [...action.payload.invoices],
      isLoading: false,
    };
  }
  if (action.type === ActionType.EDIT_INVOICE) {
    return {
      ...state,
      currentInvoice: action.payload.editedInvoice,
      isLoading: false,
      isEditing: false,
    };
  }
  if (action.type === ActionType.SET_CURRENT_INVOICE) {
    const currentInvoice = state.invoices.find(
      (invoice) => invoice._id === action.payload.id
    );
    if (!currentInvoice) {
      return {
        ...state,
        errors: "Invoice doesn't exist",
        isLoading: false,
      };
    }
    return {
      ...state,
      currentInvoice,
    };
  }
  if (action.type === ActionType.START_EDITING) {
    return { ...state, isEditing: true };
  }
  if (action.type === ActionType.STOP_EDITING) {
    return { ...state, isEditing: false };
  }
  if (action.type === ActionType.ADD_INVOICE) {
    return {
      ...state,
      invoices: [...state.invoices, action.payload.newInvoice],
      isLoading: false,
    };
  }
  if (action.type === ActionType.SET_FILTER) {
    return { ...state, filterMethod: action.payload.filterMethod };
  }
  if (action.type === ActionType.SORT_INVOICES) {
    if (state.filterMethod === 'all') {
      return { ...state, sortedInvoices: [...state.invoices] };
    }
    return {
      ...state,
      sortedInvoices: state.invoices.filter(
        (invoice) => invoice.status === state.filterMethod
      ),
    };
  }
  if (action.type === ActionType.START_LOADING) {
    return { ...state, isLoading: true };
  }
  return state;
};

export default reducer;
