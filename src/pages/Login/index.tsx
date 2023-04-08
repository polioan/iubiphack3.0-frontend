import cl from './Login.module.scss'
import { Card, LogoContainer } from '../../components'
import { Button, Input, Link } from '../../ui'

const Login: React.FC = () => {
  return (
    <main className={cl.container}>
      <Card as='form'>
        <LogoContainer />
        <div>Вход</div>
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
          <Link to={'/register'} variant='medium'>
            Зарегистрироваться
          </Link>
        </div>
      </Card>
    </main>
  )
}

export default Login
