import cl from './Login.module.scss'
import { Card, LogoContainer } from '../../components'
import { Button, Input, Link } from '../../ui'
import { GoogleLogin } from '@react-oauth/google'
import { useLogin } from '../../hooks'
import { useState } from 'react'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useLogin()

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    login({ email, password })
  }

  return (
    <main className={cl.container}>
      <Card onSubmit={onSubmit}>
        <LogoContainer />
        <div>Вход</div>
        <Input
          placeholder='Email'
          required
          type='email'
          autoComplete='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder='Пароль'
          required
          type='password'
          autoCorrect='off'
          autoCapitalize='off'
          autoComplete='current-password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div className={cl.continue_container}>
          <Button type='submit'>Продолжить</Button>
          <Link to={'/register'} variant='medium'>
            Зарегистрироваться
          </Link>
        </div>
        <GoogleLogin
          locale='ru'
          width='100%'
          containerProps={{ className: cl.google }}
          onSuccess={credentialResponse => {
            console.log(credentialResponse)
          }}
          onError={() => {
            console.error('Login Failed')
          }}
        />
      </Card>
    </main>
  )
}

export default Login
