import React, { FC } from 'react';

import './custom-button.style.scss';

export type CustomButtonProps = {
  isGoogleSignIn?: boolean;
};

const CustomButton: FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & CustomButtonProps
> = ({ children, isGoogleSignIn, ...otherprops }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default CustomButton;
