import { Button } from '@shared';
import { motion } from 'framer-motion';
import { FC } from 'react';

interface EditButtonsInterface {
  fixed?: true;
}

const EditButtons: FC<EditButtonsInterface> = ({ fixed }) => {
  return (
    <div
      className={`flex  space-x-2 ${
        fixed && 'py-2 justify-end max-w-90vw mx-auto'
      }`}
    >
      <Button type='light' callback={() => {}}>
        Edit
      </Button>
      <Button type='danger' callback={() => {}}>
        Delete
      </Button>
      <Button type='primary' callback={() => {}}>
        Mark as Paid
      </Button>
    </div>
  );
};

export default EditButtons;
