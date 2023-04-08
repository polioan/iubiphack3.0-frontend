import cl from './Link.module.scss'
import cn from 'classnames'
import { forwardRef } from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'

interface LinkProps extends RouterLinkProps {
  children?: React.ReactNode
  className?: string | undefined
  variant?: 'small' | 'medium' | undefined
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { className, children, to, variant = 'small', ...otherProps } = props
  return (
    <RouterLink
      to={to}
      ref={ref}
      className={cn(
        cl.link,
        className,
        { [cl.small]: variant === 'small' },
        { [cl.medium]: variant === 'medium' }
      )}
      {...otherProps}
    >
      {children}
    </RouterLink>
  )
})

Link.displayName = 'Link'

export default Link
