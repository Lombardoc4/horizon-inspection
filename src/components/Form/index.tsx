import React, { useState } from 'react';
import { Select } from './Select';
import { Input } from './Input';
import styled from 'styled-components';

// Types for the form fields
export interface FormFieldProps {
  id: string;
  type: string;
  required?: boolean;
  placeholder: string;
  options?: { title: string; value: string }[];
  maxLength?: number;
}

// Types for errors
interface Errors {
	[key: string]: string;
}

// Styles
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
    font-size: 16px;
    padding-top: 2em;

    p{
        margin: 0;
        font-size: initial;
    }

    input, select, textarea {
        font-size: 16px;
        width: 100%;
        padding: 0.5rem;
        /* background-color: #f5f5f5; */
        border: 1px solid #ccc;
    }

    textarea{
        font-family: inherit;
    }

    .warning {
        min-height: 2em;
        color: red;
    }
`;

const FormFields: FormFieldProps[] = [
	{
        id: 'name',
        placeholder: 'Name',
        type: 'text',
		required: true,
    },
    {
        id: 'email',
        placeholder: 'Email',
        type: 'text',
		required: true,
    },
    {
        id: 'propertyType',
        placeholder: 'Property type',
        type: 'select',
        options: [
            { title: 'Public Housing', value: 'public-housing' },
            { title: 'Multi-family', value: 'multi-family' },
        ],
		required: true,
    },
    {
        id: 'buildings',
        placeholder: 'Number of buildings',
        type: 'number',
		required: true,
        maxLength: 2
    },
    {
        id: 'units',
        placeholder: 'Number of units',
        type: 'number',
		required: true,
        maxLength: 3
    },
    {
        id: 'notes',
        placeholder: 'Propert Notes',
        type: 'textarea',
    },
];


// Validate the form fields on change
const validateOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
	const { value } = event.target;
	const maxLength = event.target.dataset.maxlength ? parseInt(event.target.dataset.maxlength) : null;
	// Handle zip to only allow 5 digits
	if (maxLength) {
        // Handle maxLength to only allow 10 digits
		// Regex that only allows numbers
		const regex = new RegExp(`^[0-9]{1,${maxLength}}$`); // Matches up to max digits
		if (!regex.test(value)) {
			event.target.value = value.slice(0, maxLength); // Trim the input value to 10 digits
		}
	}

};

// Validate the form fields on blur
const validateOnBlur = (event?: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
	if (event) {


        const { value } = event.target;
		const placeholder = event.target.getAttribute('placeholder')?.toLowerCase();
		const required = event.target.dataset.required === 'true';
		const maxLength = event.target.dataset.maxlength ? parseInt(event.target.dataset.maxlength) : null;

		// Default error message which clears previous errors
		let error = '';

		if (!value && required) {
			error = 'Please enter your ' + (placeholder && placeholder[0].toLowerCase() + placeholder.slice(1, placeholder.indexOf('*')));
		}

		if (maxLength && required) {
			// Regex that only allows numbers
			const regex = new RegExp(`^[0-9]{${maxLength}}$`); // Matches up to max digits
			if (!regex.test(value)) {
				error = 'Please enter a valid ' + (placeholder &&  placeholder[0].toLowerCase() + placeholder.slice(1, placeholder.indexOf('*')));
			}
		}

		return error;
	}
};


const validateForm = (values: any) => {
	const errors: Errors = {};

	const requiredFields = FormFields.filter(field => field.required);
	requiredFields.forEach(field => {
		if (!values[field.id]) {
			errors[field.id] = 'Please enter your ' + field.placeholder[0].toLowerCase() + field.placeholder.slice(1, field.placeholder.length);
		}

		if (field.id === 'email' && !/\S+@\S+\.\S+/.test(values.email)) {
			errors[field.id] = 'Please enter a valid email';
		}

		if (field.maxLength) {
			const regex = new RegExp(`^[0-9]{${field.maxLength}}$`); // Matches up to max digits
			if (!regex.test(values[field.id])) {
				errors[field.id] = 'Please enter a valid ' + field.placeholder[0].toLowerCase() + field.placeholder.slice(1, field.placeholder.length);
			}
		}

	});


	return errors;
}

const defaultInputs =
	FormFields.reduce((acc, field) => {
		acc[field.id] = '';
		return acc;
	}, {} as any);




export const Form = () => {
  const [values, setValues] = useState(defaultInputs);
  const [errors, setErrors] = useState<Errors>({});

  const updateValue = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = event.target;

    console.log([id, value])
    setValues({ ...values, [id]: value });
  };

  const blurValidation = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const error = validateOnBlur(event)

		setErrors({ ...errors, [event.target.id]: error || '' });
		if (!error) {
			updateValue(event)
		}
	};


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

	const errors = validateForm(values);

	setErrors(errors);

    console.log('values', values)
    // if (Object.keys(errors).length === 0) {
      // submit form
	//   submitForm(values)
	// 		.then((response) => {
	// 			console.log("response", response);
	// 		})
	// 		.catch((error) => {
	// 			console.log("error", error);
	// 		});
    // // }
  };


  return (
    <StyledForm onSubmit={handleSubmit}>
      {FormFields.map((field) => (
        <div key={field.id}>
          {field.type === 'select' ? (
            <Select {...field} onChange={blurValidation}  />
          ) : field.type === 'textarea' ? (
            <textarea {...field} cols={50} rows={10} />
          ) :
          (
			<Input {...field} onChange={validateOnChange} onBlur={blurValidation} />
          )}
          <p className='warning'>{errors[field.id] ? errors[field.id] : ''}</p>
        </div>
      ))}

      <button type="submit">Submit</button>
    </StyledForm>
  );
};