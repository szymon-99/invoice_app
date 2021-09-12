import { Formik } from 'formik';
import { InvoiceApiResponse } from '../../../types';
import { useActions, useAppSelector } from '@hooks';
import FormButtons from './FormButtons';
import { validationSchema } from '@utils/constants';
import FormStructure from './FormStructure';

const EditForm = () => {
  const { updateInvoice, startUpdating } = useActions();
  const { currentInvoice } = useAppSelector();

  if (!currentInvoice) {
    return null;
  }

  const handleSubmit = async (invoice: InvoiceApiResponse) => {
    invoice.status = 'pending';
    startUpdating();
    updateInvoice(invoice);
  };

  return (
    <Formik
      initialValues={currentInvoice}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      <>
        <FormStructure />
        <FormButtons type='edit' />
      </>
    </Formik>
  );
};

export default EditForm;
