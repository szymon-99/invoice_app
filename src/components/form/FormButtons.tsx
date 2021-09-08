import { FC } from 'react';
import { useFormikContext } from 'formik';
import { InvoiceClientInformations } from '../../../types';
import { useActions, useAppSelector } from '@hooks';
import { Button } from '@shared';

const FormButtons: FC = () => {
  const { submitForm, values: invoice } =
    useFormikContext<InvoiceClientInformations>();

  const { addInvoice, closeForm, updateInvoice, startLoading } = useActions();
  const { isEditing, isLoading } = useAppSelector();

  const submitAsDraft = async () => {
    startLoading();
    addInvoice(invoice);
    closeForm();
  };
  const submitEdittedInvoice = async () => {
    startLoading();
    updateInvoice(invoice);
    closeForm();
  };
  return (
    <div className='fixed bottom-0 shadow-top bg-primaryLight inset-x-0 rounded-t-xl px-6 py-4 md:bg-primary md:px-14'>
      <div className='flex justify-end items-center space-x-2'>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : isEditing ? (
          <>
            <Button
              type='light'
              callback={() => {
                closeForm();
              }}
            >
              Cancel
            </Button>
            <Button type='primary' callback={submitEdittedInvoice}>
              Save Changes
            </Button>
          </>
        ) : (
          <>
            <Button type='light' callback={closeForm}>
              Discard
            </Button>
            <Button type='dark' callback={submitAsDraft}>
              Save as Draft
            </Button>
            <Button callback={submitForm} type='primary'>
              Save & Send
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
export default FormButtons;
