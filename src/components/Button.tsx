import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={`rounded bg-gray-800 text-gray-200 px-3 py-1 ${
        className ? className : ''
      }`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
