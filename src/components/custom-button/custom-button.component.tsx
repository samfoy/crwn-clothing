import React, { FC } from 'react';

import './custom-button.style.scss';

const CustomButton: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...otherprops
}) => {
  return (
    <button className="custom-button" {...otherprops}>
      {children}
    </button>
  );
};

export default CustomButton;
