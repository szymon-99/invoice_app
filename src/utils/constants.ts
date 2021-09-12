import {
  FilterOptions,
  InvoiceClientInformations,
  PaymentTerms,
} from '../../types';
import * as Yup from 'yup';

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
  itemList: [{ name: '', price: '0.00', qty: '0' }],
};

export const validationSchema = Yup.object().shape({
  userInfo: Yup.object({
    street: Yup.string().trim().required('required'),
    city: Yup.string().trim().required('required'),
    country: Yup.string().trim().required('required'),
    postCode: Yup.string().trim().required('required'),
  }),
  clientInfo: Yup.object({
    name: Yup.string().trim().required('required'),
    email: Yup.string().trim().email('Invalid Email').required('required'),
    street: Yup.string().trim().required('required'),
    country: Yup.string().trim().required('required'),
    postCode: Yup.string().trim().required('required'),
    city: Yup.string().trim().required('required'),
  }),
  itemList: Yup.array()
    .of(
      Yup.object({
        name: Yup.string().trim().required('- Please provide item name'),
        qty: Yup.string()
          .matches(/[^0]+/, '- Please provide quantity')
          .required('- Please provide quantity'),
        price: Yup.string()
          .matches(/[^(0.00)]/, '- Please provide price')
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
