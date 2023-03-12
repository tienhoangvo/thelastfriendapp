import { FormHTMLAttributes, ReactNode } from 'react'
import FormField from './FormField'
import FormInput from './FormInput'
import FormLabel from './FormLabel'

export type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode
}

const Form = ({ children, className, ...rest }: FormProps) => {
  return (
    <form
      className={`flex flex-col gap-3 items-start ${
        className ? className : ''
      }`}
      {...rest}
    >
      {children}
    </form>
  )
}

Form.Field = FormField

Form.Input = FormInput

Form.Label = FormLabel

export default Form
