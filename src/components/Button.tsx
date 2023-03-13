import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
const button = cva(
  [
    'rounded-full h-10 before:block before:absolute before:bottom-0 before:left-0 relative overflow-hidden before:w-full before:h-full before:opacity-0',
    'focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-light-surface'
  ],
  {
    variants: {
      variant: {
        filled: [
          'text-light-on-primary before:bg-light-on-primary bg-sys-primary',
          'dark:text-dark-on-primary dark:before:bg-dark-on-primary ',
          'px-6 hover:before:opacity-hover focus:before:opacity-focus',
          'disabled:before:opacity-focus disabled:before:bg-light-on-surface disabled:bg-opacity-0 disabled:text-light-on-surface',
          'dark:disabled:before:opacity-focus dark:disabled:before:bg-dark-on-surface dark:disabled:bg-opacity-0 dark:disabled:text-dark-on-surface',
        ],
        outlined: [
          ""
        ]
      },
    },
    defaultVariants: {
      variant: 'filled',
    },
  }
)

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    children: ReactNode
  }

const Button = ({ children, className, variant, ...rest }: ButtonProps) => {
  return (
    <button
      className={button({
        variant,
      })}
      {...rest}
    >
      <div className='relative'>{children}</div>
    </button>
  )
}

export default Button
