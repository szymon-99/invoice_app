import {
  FilterOptions,
  InvoiceClientInformations,
  PaymentTerms,
} from '../../types';
import * as Yup from 'yup';
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

export const validationSchema = Yup.object().shape({
  userInfo: Yup.object({
    street: Yup.string().required("Can't be empty"),
    city: Yup.string().required("Can't be empty"),
    country: Yup.string().required("Can't be empty"),
    postCode: Yup.string().required("Can't be empty"),
  }),
  clientInfo: Yup.object({
    name: Yup.string().required("Can't be empty"),
    email: Yup.string()
      .email('Invalid Email')
      .required('Invalid email address'),
    street: Yup.string().required("Can't be empty"),
    country: Yup.string().required("Can't be empty"),
    postCode: Yup.string().required("Can't be empty"),
    city: Yup.string().required("Can't be empty"),
  }),
  itemList: Yup.array()
    .of(
      Yup.object({
        name: Yup.string().required('- Please provide item name'),
        qty: Yup.string().required('- Please provide quantity'),
        price: Yup.string()
          .matches(/[^(0.00)]/, '- Price must be provided')
          .required('- Please provide price '),
      })
    )
    .min(1, 'an item must be added')
    .required(),
  desc: Yup.string().required("Can't be empty"),
});

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
