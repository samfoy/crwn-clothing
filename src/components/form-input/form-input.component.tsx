import React, { FC } from 'react';

import './form-input.style.scss';

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value?: string;
}

const FormInput: FC<FormInputProps> = ({
  handleChange,
  label,
  value,
  ...otherProps
}) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label className={`${value ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
