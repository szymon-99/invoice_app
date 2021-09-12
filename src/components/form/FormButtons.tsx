import { FC } from 'react';
import { useFormikContext } from 'formik';
import { InvoiceClientInformations } from '../../../types';
import { useActions } from '@hooks';
import { Button } from '@shared';

interface FormButtonsProps {
  type: 'add' | 'edit';
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
    <div className='fixed inset-x-0 bottom-0 shadow-top bg-primary  rounded-t-xl px-6 py-4  md:px-14'>
      <div className='flex justify-end items-center space-x-2'>
        {type === 'edit' && (
          <>
            <Button
              type='light'
              callback={() => {
                closeForm();
              }}
            >
              Cancel
            </Button>
            <Button type='primary' withSpinner callback={submitForm}>
              Save Changes
            </Button>
          </>
        )}

        {type === 'add' && (
          <>
            <Button type='light' callback={closeForm}>
              Discard
            </Button>
            <Button type='dark' withSpinner callback={submitAsDraft}>
              <span className='hidden sm:inline'>Save as </span>Draft
            </Button>
            <Button callback={submitForm} withSpinner type='primary'>
              Save<span className='hidden sm:inline'> & Send</span>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
export default FormButtons;
