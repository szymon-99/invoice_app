import { FC } from 'react';
import { useFormikContext } from 'formik';
import { InvoiceClientInformations } from '../../../types';
import { useActions } from '@hooks';
import { Button } from '@shared';

interface FormButtonsProps {
  type: 'Add' | 'Edit';
}

const FormButtons: FC<FormButtonsProps> = ({ type }) => {
  const { submitForm, values: invoice } =
    useFormikContext<InvoiceClientInformations>();

  const { addInvoice, closeForm, startUpdating } = useActions();

  const submitAsDraft = async () => {
    startUpdating();
    addInvoice(invoice);
  };

  return (
    <div className='fixed bottom-0 shadow-top bg-primaryLight inset-x-0 rounded-t-xl px-6 py-4 md:bg-primary md:px-14'>
      <div className='flex justify-end items-center space-x-2'>
        {type === 'Edit' && (
          <>
            <Button
              type='light'
              callback={() => {
                closeForm();
              }}
            >
              Cancel
            </Button>
            <Button type='primary' callback={submitForm}>
              Save Changes
            </Button>
          </>
        )}

        {type === 'Add' && (
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