import cl from './LogoContainer.module.scss'
import { LogoSvg } from '../../icons'

const LogoContainer: React.FC = () => {
  return (
    <div className={cl.logo_container}>
      <LogoSvg />
      <div translate='no'>biopass</div>
    </div>
  )
}

export default LogoContainer
