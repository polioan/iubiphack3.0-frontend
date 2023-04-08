import cl from './Input.module.scss'
import cn from 'classnames'
import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string | undefined
  children?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { children, className, ...otherProps } = props
  return (
    <input ref={ref} className={cn(cl.input, className)} {...otherProps}>
      {children}
    </input>
  )
})

Input.displayName = 'Input'

export default Input
