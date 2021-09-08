import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import Select from './Select';
import { InvoiceClientInformations } from '../../../types';
import ItemList from './ItemList';
import { FC } from 'react';
import { useActions } from '@hooks';
import FormButtons from './FormButtons';
import { paymentOptions } from '@utils/constants';

interface FormProps {
  values: InvoiceClientInformations;
}

const FormComponent: FC<FormProps> = ({ values }) => {
  const { addInvoice, startLoading } = useActions();

  const handleSubmit = async (invoice: InvoiceClientInformations) => {
    invoice.status = 'pending';
    startLoading();
    addInvoice(invoice);
  };

  return (
    <Formik
      initialValues={{ ...values }}
      enableReinitialize={true}
      validationSchema={Yup.object().shape({
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
                .matches(/[^(0\.00)]/, '- Price must be provided')
                .required('- Please provide price '),
            })
          )
          .min(1, 'an item must be added')
          .required(),
        desc: Yup.string().required("Can't be empty"),
      })}
      onSubmit={(values) => handleSubmit(values)}
    >
      <>
        <Form className='pt-4 pb-16'>
          <div className='mt-6'>
            <h3 className='text-blue-500 dark:text-blue-500'>Bill From</h3>
            <Input name='userInfo.street' label='street address' />
            <div className='grid-cols-2 gap-x-3 md:grid-cols-3 grid md:gap-x-6'>
              <Input name='userInfo.city' label='city' />
              <Input name='userInfo.postCode' label='post code' />
              <div className='col-start-1 col-end-3 md:col-span-1'>
                <Input name='userInfo.country' label='country' />
              </div>
            </div>
          </div>

          <div className='mt-8'>
            <h3 className='text-blue-500 dark:text-blue-500'>Bill To</h3>
            <Input name='clientInfo.name' label="client's Name" />
            <Input
              name='clientInfo.email'
              label="client's Email"
              type='email'
            />
            <Input name='clientInfo.street' label='street address' />
            <div className='grid gap-x-3 grid-cols-2 md:gap-x-6 md:grid md:grid-cols-3'>
              <Input name='clientInfo.city' label='city' />
              <Input name='clientInfo.postCode' label='post code' />
              <div className=' col-start-1 col-end-3 md:col-span-1'>
                <Input name='clientInfo.country' label='country' />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3 md:gap-6'>
              <Input name='createdAt' label='invoice date' type='date' />
              <Select
                name='paymentDue'
                options={paymentOptions}
                label='payment terms'
              />
            </div>
          </div>
          <Input name='desc' label='project Desc' />
          <h4 className=' text-gray font-bold mt-16 md:mt-6'>Item List</h4>

          <ItemList />
        </Form>

        <FormButtons />
      </>
    </Formik>
  );
};

export default FormComponent;
