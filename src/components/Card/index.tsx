import cl from './Card.module.scss'
import cn from 'classnames'

interface CardProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode
  className?: string | undefined
}

const Card: React.FC<CardProps> = ({ children, className, ...otherProps }) => {
  return (
    <form className={cn(cl.card, className)} {...otherProps}>
      {children}
    </form>
  )
}

export default Card
