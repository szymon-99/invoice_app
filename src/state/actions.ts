import { ActionType } from './action-types';
import { InvoiceApiResponse, FilterOptions } from '../../types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'state';

export type AppThunk<T extends AsyncAction> = ThunkAction<
  void,
  RootState,
  unknown,
  T | ShowErrorAction
>;

export interface OpenFormAction {
  type: ActionType.OPEN_FORM;
}
export interface CloseFormAction {
  type: ActionType.CLOSE_FORM;
}
export interface GetInvoicesAction {
  type: ActionType.GET_INVOICES;
  payload: {
    invoices: InvoiceApiResponse[];
  };
}
export interface StartEditingAction {
  type: ActionType.START_EDITING;
}

export interface StartLoadingAction {
  type: ActionType.START_LOADING;
}
export interface AddInvoiceAction {
  type: ActionType.ADD_INVOICE;
  payload: {
    newInvoice: InvoiceApiResponse;
  };
}

export interface UpdateInvoiceAction {
  type: ActionType.UPDATE_INVOICE;
  payload: {
    updatedInvoice: InvoiceApiResponse;
  };
}

export interface DeleteInvoiceAction {
  type: ActionType.DELETE_INVOICE;
  payload: {
    id: string;
  };
}

export interface SortInvoiceAction {
  type: ActionType.SORT_INVOICES;
}
export interface SetFilterAction {
  type: ActionType.SET_FILTER;
  payload: {
    filterMethod: FilterOptions;
  };
}
export interface SetCurrentInvoiceAction {
  type: ActionType.SET_CURRENT_INVOICE;
  payload: {
    id: string;
  };
}

export interface ShowErrorAction {
  type: ActionType.SHOW_ERROR;
}

export interface StartUpdatingAction {
  type: ActionType.START_UPDATING;
}

export interface OpenModalAction {
  type: ActionType.OPEN_MODAL;
}

export interface CloseModalAction {
  type: ActionType.CLOSE_MODAL;
}

export type AppAction =
  | OpenFormAction
  | CloseFormAction
  | AddInvoiceAction
  | SetCurrentInvoiceAction
  | StartEditingAction
  | GetInvoicesAction
  | SortInvoiceAction
  | StartLoadingAction
  | UpdateInvoiceAction
  | SetFilterAction
  | ShowErrorAction
  | StartUpdatingAction
  | OpenModalAction
  | CloseModalAction
  | DeleteInvoiceAction;

type AsyncAction =
  | AddInvoiceAction
  | GetInvoicesAction
  | UpdateInvoiceAction
  | DeleteInvoiceAction;
