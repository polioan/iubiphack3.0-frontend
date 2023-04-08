import cl from './Register.module.scss'
import { Button, Input, Link } from '../../ui'
import { Card, LogoContainer } from '../../components'

const Register: React.FC = () => {
  return (
    <main className={cl.container}>
      <Card as='form'>
        <LogoContainer />
        <div>Регистрация</div>
        <Input placeholder='Имя' required />
        <Input placeholder='Фамилия' required />
        <Input placeholder='Отчество' required />
        <Input placeholder='Телефон' required type='tel' />
        <Input placeholder='Email' required type='email' />
        <Input
          placeholder='Пароль'
          required
          type='password'
          autoCorrect='off'
          autoCapitalize='off'
        />
        <div className={cl.continue_container}>
          <Button>Продолжить</Button>
          <Link to={'/login'}>Войти</Link>
        </div>
      </Card>
    </main>
  )
}

export default Register
