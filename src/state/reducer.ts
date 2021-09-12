import { InvoiceApiResponse, FilterOptions } from '../../types';
import { ActionType } from './action-types';
import { AppAction } from './actions';

export interface AppState {
  invoices: InvoiceApiResponse[];
  sortedInvoices: InvoiceApiResponse[];
  currentInvoice: InvoiceApiResponse | null;
  isEditing: boolean;
  isLoading: boolean;
  isUpdating: boolean;
  isFormOpen: boolean;
  isModalOpen: boolean;
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
  isUpdating: false,
  isModalOpen: false,
  filterMethod: 'all',
  errors: null,
};

export const reducer = (state = initialState, action: AppAction): AppState => {
  state.errors = null;
  if (action.type === ActionType.GET_INVOICES) {
    return {
      ...state,
      invoices: [...action.payload.invoices],
      sortedInvoices: [...action.payload.invoices],
      isLoading: false,
    };
  }
  if (action.type === ActionType.UPDATE_INVOICE) {
    return {
      ...state,
      currentInvoice: action.payload.updatedInvoice,
      invoices: state.invoices.map((invoice) => {
        if (invoice._id === action.payload.updatedInvoice._id) {
          return action.payload.updatedInvoice;
        }
        return invoice;
      }),
      isEditing: false,
      isUpdating: false,
      isFormOpen: false,
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
    return { ...state, isEditing: true, isFormOpen: true };
  }
  if (action.type === ActionType.ADD_INVOICE) {
    return {
      ...state,
      invoices: [action.payload.newInvoice, ...state.invoices],
      isUpdating: false,
      isFormOpen: false,
    };
  }
  if (action.type === ActionType.DELETE_INVOICE) {
    return {
      ...state,
      invoices: state.invoices.filter(
        (invoice) => invoice._id !== action.payload.id
      ),
      isUpdating: false,
      isModalOpen: false,
      currentInvoice: null,
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
  if (action.type === ActionType.OPEN_FORM) {
    return { ...state, isFormOpen: true };
  }
  if (action.type === ActionType.CLOSE_FORM) {
    return { ...state, isFormOpen: false, isEditing: false };
  }
  if (action.type === ActionType.SHOW_ERROR) {
    return {
      ...state,
      errors: 'Something went wrong, try again later',
      isUpdating: false,
      isFormOpen: false,
      isEditing: false,
    };
  }
  if (action.type === ActionType.START_UPDATING) {
    return { ...state, isUpdating: true };
  }
  if (action.type === ActionType.OPEN_MODAL) {
    return { ...state, isModalOpen: true };
  }
  if (action.type === ActionType.CLOSE_MODAL) {
    return { ...state, isModalOpen: false };
  }
  return state;
};

export default reducer;
