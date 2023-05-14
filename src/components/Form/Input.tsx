import React from 'react';
import type { FormFieldProps } from '.';

interface InputProps extends FormFieldProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
}

export const Input = ({id, type, required, maxLength, placeholder, onChange, onBlur}: InputProps) => {
    return (
        <input
              type={type}
              id={id}
              data-required={required}
			  data-maxlength={maxLength}
              placeholder={placeholder + (required ? '*' : '')}
			  onChange={onChange}
              onBlur={onBlur}
            />
    )
}