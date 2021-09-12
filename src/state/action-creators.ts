import axios from 'axios';
import {
  FilterOptions,
  InvoiceApiResponse,
  InvoiceClientInformations,
} from '../../types';
import { ActionType } from './action-types';
import {
  AddInvoiceAction,
  CloseFormAction,
  UpdateInvoiceAction,
  GetInvoicesAction,
  SetCurrentInvoiceAction,
  SetFilterAction,
  SortInvoiceAction,
  StartEditingAction,
  StartLoadingAction,
  OpenFormAction,
  AppThunk,
  StartUpdatingAction,
  OpenModalAction,
  CloseModalAction,
  DeleteInvoiceAction,
} from './actions';

export const getInvoices =
  (): AppThunk<GetInvoicesAction> => async (dispatch) => {
    try {
      const { data: invoices } = await axios.get<InvoiceApiResponse[]>(
        `${process.env.REACT_APP_API_URL}`
      );

      dispatch({
        type: ActionType.GET_INVOICES,
        payload: {
          invoices,
        },
      });
    } catch (error) {
      dispatch({
        type: ActionType.SHOW_ERROR,
      });
    }
  };

export const addInvoice =
  (invoice: InvoiceClientInformations): AppThunk<AddInvoiceAction> =>
  async (dispatch) => {
    try {
      const { data: newInvoice } = await axios.post<InvoiceApiResponse>(
        `${process.env.REACT_APP_API_URL}`,
        invoice
      );

      dispatch({
        type: ActionType.ADD_INVOICE,
        payload: {
          newInvoice,
        },
      });
    } catch (error) {
      dispatch({
        type: ActionType.SHOW_ERROR,
      });
    }
  };

export const updateInvoice =
  (invoiceToUpdate: InvoiceApiResponse): AppThunk<UpdateInvoiceAction> =>
  async (dispatch) => {
    try {
      const { data: updatedInvoice } = await axios.patch<InvoiceApiResponse>(
        `${process.env.REACT_APP_API_URL}/${invoiceToUpdate._id}`,
        invoiceToUpdate
      );

      dispatch({
        type: ActionType.UPDATE_INVOICE,
        payload: {
          updatedInvoice,
        },
      });
    } catch (error) {
      dispatch({
        type: ActionType.SHOW_ERROR,
      });
    }
  };

export const deleteInvoice =
  (id: string): AppThunk<DeleteInvoiceAction> =>
  async (dispatch) => {
    try {
      await axios
        .delete(`${process.env.REACT_APP_API_URL}/${id}`)
        .catch((err) => err);

      dispatch({ type: ActionType.DELETE_INVOICE, payload: { id } });
    } catch (error) {
      dispatch({ type: ActionType.SHOW_ERROR });
    }
  };

export const closeForm = (): CloseFormAction => ({
  type: ActionType.CLOSE_FORM,
});

export const openForm = (): OpenFormAction => ({ type: ActionType.OPEN_FORM });

export const setCurrentInvoice = (id: string): SetCurrentInvoiceAction => ({
  type: ActionType.SET_CURRENT_INVOICE,
  payload: { id },
});

export const startEditing = (): StartEditingAction => ({
  type: ActionType.START_EDITING,
});

export const startLoading = (): StartLoadingAction => ({
  type: ActionType.START_LOADING,
});

export const setFilter = (filterMethod: FilterOptions): SetFilterAction => ({
  type: ActionType.SET_FILTER,
  payload: {
    filterMethod,
  },
});

export const sortInvoices = (): SortInvoiceAction => ({
  type: ActionType.SORT_INVOICES,
});

export const startUpdating = (): StartUpdatingAction => ({
  type: ActionType.START_UPDATING,
});

export const openModal = (): OpenModalAction => ({
  type: ActionType.OPEN_MODAL,
});

export const closeModal = (): CloseModalAction => ({
  type: ActionType.CLOSE_MODAL,
});
