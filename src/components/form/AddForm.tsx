import { Formik } from 'formik';
import { InvoiceClientInformations } from '../../../types';
import { useActions } from '@hooks';
import FormButtons from './FormButtons';
import { initialValues, validationSchema } from '@utils/constants';
import FormStructure from './FormStructure';

const AddForm = () => {
  const { addInvoice, startUpdating } = useActions();

  const handleSubmit = async (invoice: InvoiceClientInformations) => {
    invoice.status = 'pending';
    startUpdating();
    addInvoice(invoice);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      <>
        <FormStructure />
        <FormButtons type='Add' />
      </>
    </Formik>
  );
};

export default AddForm;
