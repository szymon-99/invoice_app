import {
  FilterOptions,
  InvoiceClientInformations,
  PaymentTerms,
} from '../../types';
import { formatPrice } from './helpers';

export const initialValues: InvoiceClientInformations = {
  userInfo: {
    street: '',
    city: '',
    country: '',
    postCode: '',
  },
  clientInfo: {
    name: '',
    email: '',
    street: '',
    country: '',
    postCode: '',
    city: '',
  },
  createdAt: new Date().toISOString().split('T')[0],
  paymentDue: 'next 7 days',
  desc: '',
  status: 'draft',
  itemList: [{ name: '', price: formatPrice(), qty: '' }],
};

export const paymentOptions: PaymentTerms[] = [
  'next day',
  'next 7 days',
  'next 14 days',
  'next 30 days',
];

export const filterOptions: FilterOptions[] = [
  'all',
  'draft',
  'paid',
  'pending',
];
