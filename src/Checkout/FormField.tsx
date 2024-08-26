import React from 'react';

interface FormError {
	message?: string
}

interface FormFieldProps extends React.HTMLProps<HTMLInputElement>{
	label: string;
	register?: any; 
	inputRef?: React.Ref<HTMLInputElement>;
	errors?: FormError;
	normalize?: (value: string) => string;
}

export const FormField = ({label, register, name, errors, normalize = (value) => value, ...inputProps}: FormFieldProps) => {
	return (
		<div className="nes-field">
			<label htmlFor={name} id={`${name}-label`}>{label}:</label>
			<input 
				{...inputProps}
				{...register(name)}
				aria-labelledby={`${name}-label`}
				name={name}
				className={`nes-input ${errors && 'is-error'}`}
				onChange={(e) => (e.target.value = normalize(e.target.value))}
			/>
			{errors && (
				<p className='note nes-text is-error'>Error: {errors.message}</p>
			)}
		</div>
	)
}