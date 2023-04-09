import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components'
import { useProfileQuery } from '../../hooks'
import { UserSvg } from '../../icons'
import { Button, Input } from '../../ui'
import cl from './Cab.module.scss'

const Cab: React.FC = () => {
  const {
    surname,
    middlename,
    name,
    phone,
    email,
    setSurname,
    setMiddlename,
    setName,
    setPhone,
    setEmail,
  } = useProfileQuery()

  const navigate = useNavigate()

  const queryClient = useQueryClient()

  function onLeave() {
    window.localStorage.removeItem('token')
    queryClient.clear()
    navigate('/login')
  }

  return (
    <main className={cl.container}>
      <Card>
        <div className={cl.top_text}>Личный кабинет</div>
        <UserSvg className={cl.top_text} />
        <Input
          placeholder='Иванов'
          required
          autoComplete='family-name'
          value={surname}
          onChange={setSurname}
        />
        <Input
          placeholder='Иванович'
          required
          autoComplete='additional-name'
          value={middlename}
          onChange={setMiddlename}
        />
        <Input
          placeholder='Иван'
          required
          autoComplete='given-name'
          value={name}
          onChange={setName}
        />
        <Input
          placeholder='Телефон'
          required
          type='tel'
          autoComplete='tel'
          value={phone}
          onChange={setPhone}
        />
        <Input
          placeholder='Email'
          required
          type='email'
          autoComplete='email'
          value={email}
          onChange={setEmail}
        />
        <Input
          placeholder='Пароль'
          required
          type='password'
          autoCorrect='off'
          autoCapitalize='off'
          autoComplete='current-password'
        />
        <Button onClick={onLeave}>Выйти из аккаунта</Button>
      </Card>
    </main>
  )
}

export default Cab
