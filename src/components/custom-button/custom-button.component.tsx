import React, { FC } from 'react';

import './custom-button.style.scss';

export type CustomButtonProps = {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
};

const CustomButton: FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & CustomButtonProps
> = ({ children, isGoogleSignIn, inverted, ...otherprops }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn
        ? 'google-sign-in'
        : ''} custom-button`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default CustomButton;
