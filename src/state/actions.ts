import { ActionType } from './action-types';
import { InvoiceApiResponse, FilterOptions } from '../../types';

export interface OpenFormAction {
  type: ActionType.OPEN_FORM;
}
export interface CloseFormAction {
  type: ActionType.CLOSE_FORM;
}

export interface AddInvoiceAction {
  type: ActionType.ADD_INVOICE;
  payload: {
    newInvoice: InvoiceApiResponse;
  };
}
export interface SortInvoiceAction {
  type: ActionType.SORT_INVOICES;
}
export interface GetInvoicesAction {
  type: ActionType.GET_INVOICES;
  payload: {
    invoices: InvoiceApiResponse[];
  };
}
export interface SetCurrentInvoiceAction {
  type: ActionType.SET_CURRENT_INVOICE;
  payload: {
    id: string;
  };
}
export interface EditInvoiceAction {
  type: ActionType.EDIT_INVOICE;
  payload: {
    invoice: InvoiceApiResponse;
  };
}
export interface StartEditingAction {
  type: ActionType.START_EDITING;
}
export interface StopEditingAction {
  type: ActionType.STOP_EDITING;
}
export interface StartLoadingAction {
  type: ActionType.START_LOADING;
}
export interface SetFilterAction {
  type: ActionType.SET_FILTER;
  payload: {
    filterMethod: FilterOptions;
  };
}

export type Action =
  | OpenFormAction
  | CloseFormAction
  | AddInvoiceAction
  | SetCurrentInvoiceAction
  | StartEditingAction
  | StopEditingAction
  | GetInvoicesAction
  | SortInvoiceAction
  | StartLoadingAction
  | EditInvoiceAction
  | SetFilterAction;
