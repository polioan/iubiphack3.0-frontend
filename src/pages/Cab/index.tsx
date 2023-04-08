import { Card } from '../../components'
import { UserSvg } from '../../icons'
import { Button, Input } from '../../ui'
import cl from './Cab.module.scss'

const Cab: React.FC = () => {
  return (
    <main className={cl.container}>
      <Card as='form'>
        <div className={cl.top_text}>Личный кабинет</div>
        <UserSvg />
        <Input placeholder='Иванов' required />
        <Input placeholder='Иванович' required />
        <Input placeholder='Иван' required />
        <Input placeholder='Телефон' required type='tel' />
        <Input placeholder='Email' required type='email' />
        <Input
          placeholder='Пароль'
          required
          type='password'
          autoCorrect='off'
          autoCapitalize='off'
        />
        <Button>Выйти из аккаунта</Button>
      </Card>
    </main>
  )
}

export default Cab
