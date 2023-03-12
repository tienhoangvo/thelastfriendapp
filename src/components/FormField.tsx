import { HTMLAttributes, ReactNode } from 'react'

export type FormFieldProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

const FormField = ({ children, className, ...rest }: FormFieldProps) => {
  return (
    <div
      className={`flex flex-col gap-1 w-full ${className ? className : ''}`}
      {...rest}
    >
      {children}
    </div>
  )
}

export default FormField
