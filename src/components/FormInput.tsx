import { InputHTMLAttributes, ReactNode } from 'react'

export type FormInputProps = InputHTMLAttributes<HTMLInputElement>

const FormInput = ({ className, ...rest }: FormInputProps) => {
  return (
    <input
      className={`border rounded py-1 px-2 ${className ? className : ''}`}
      {...rest}
    />
  )
}

export default FormInput
