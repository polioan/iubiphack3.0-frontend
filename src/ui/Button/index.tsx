import cl from './Button.module.scss'
import cn from 'classnames'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string | undefined
  children?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, ...otherProps } = props
  return (
    <button ref={ref} className={cn(cl.btn, className)} {...otherProps}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
