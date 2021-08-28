export type TStatus = 'pending' | 'draft' | 'paid';
export type FilterOptions = TStatus | 'all';

export interface InvoiceBasicInfo {
  id: string;
  name: string;
  date: string;
  price: string;
  status: TStatus;
}

export interface SummaryItem {
  name: string;
  price: string;
  qty: string;
}
export interface InvoiceClientInformations {
  userInfo: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientInfo: {
    name: string;
    email: string;
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  createdAt: string;
  paymentDue: PaymentTerms;
  desc: string;
  itemList: SummaryItem[];
  status: TStatus;
}
export interface InvoiceApiResponse extends InvoiceClientInformations {
  _id: string;
  total: string;
}

type PaymentTerms =
  | 'next day'
  | 'next 7 days'
  | 'next 14 days'
  | 'next 30 days';
