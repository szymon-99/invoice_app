import { Button } from '@shared';
import { FC } from 'react';
import { useActions } from '@hooks';

interface EditButtonsInterface {
  fixed?: true;
}

const EditButtons: FC<EditButtonsInterface> = ({ fixed }) => {
  const { startEditing } = useActions();

  return (
    <div
      className={`flex  space-x-2 ${
        fixed && 'py-2 justify-end max-w-90vw mx-auto'
      }`}
    >
      <Button type='light' callback={startEditing}>
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
