import { FC } from 'react';

interface ButtonProps {
  callback: () => void;
  type: 'danger' | 'primary' | 'dark' | 'light';
}

const Button: FC<ButtonProps> = ({ children, type, callback }) => {
  return (
    <button
      onClick={() => callback()}
      className={`px-6 py-4  text-xs leading-4 rounded-3xl font-bold transition focus hover:opacity-90  ${
        type === 'danger'
          ? ' text-white bg-red hover:bg-redHover'
          : type === 'primary'
          ? 'text-white bg-btnPrimary hover:bg-btnPrimaryHover  '
          : type === 'dark'
          ? 'bg-btnDark text-white hover:bg-btnDarkHover'
          : 'text-fontSecondary bg-btnLight hover:bg-btnSecondaryHover'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
