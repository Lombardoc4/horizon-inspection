
import React from 'react';
import type { FormFieldProps } from '.';

interface SelectProps extends FormFieldProps{
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select = ({id, placeholder, options, required, onChange}: SelectProps) => {
    return (
        <select id={id} onChange={onChange}>
				<option value="">{placeholder + (required ? '*' : '')}</option>
              {options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.title}
                </option>
              ))}
        </select>
    )
}