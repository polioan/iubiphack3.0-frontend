import cl from './Register.module.scss'
import { Button, Input, Link } from '../../ui'
import { Card, LogoContainer } from '../../components'
import { useRegistration } from '../../hooks'
import { useState } from 'react'

const Register: React.FC = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [middlename, setMiddlename] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { register } = useRegistration()

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    register({
      name,
      surname,
      middlename,
      phone,
      email,
      password,
    })
  }

  return (
    <main className={cl.container}>
      <Card onSubmit={onSubmit}>
        <LogoContainer />
        <div>Регистрация</div>
        <Input
          placeholder='Имя'
          required
          autoComplete='given-name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          placeholder='Фамилия'
          required
          autoComplete='family-name'
          value={surname}
          onChange={e => setSurname(e.target.value)}
        />
        <Input
          placeholder='Отчество'
          required
          autoComplete='additional-name'
          value={middlename}
          onChange={e => setMiddlename(e.target.value)}
        />
        <Input
          placeholder='Телефон'
          required
          type='tel'
          autoComplete='tel'
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
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
          autoComplete='new-password'
          value={password}
          onChange={e => setPassword(e.target.value)}
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
