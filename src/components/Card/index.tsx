import cl from './Card.module.scss'
import cn from 'classnames'

interface CardProps {
  children?: React.ReactNode
  className?: string | undefined
  as: React.ElementType
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  as,
  ...otherProps
}) => {
  const Component = as
  return (
    <Component className={cn(cl.card, className)} {...otherProps}>
      {children}
    </Component>
  )
}

export default Card
