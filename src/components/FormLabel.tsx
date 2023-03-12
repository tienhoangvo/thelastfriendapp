import { LabelHTMLAttributes, ReactNode } from 'react'

export type FormLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode
}
export default function FormLabel({
  children,
  className,
  ...rest
}: FormLabelProps) {
  return (
    <label
      className={`text-sm font-medium ${className ? className : ''}`}
      {...rest}
    >
      {children}
    </label>
  )
}
