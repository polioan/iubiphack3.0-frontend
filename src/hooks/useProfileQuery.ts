import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import axios, { isAxiosError } from '../common/axios'
import { error, uniqueToast } from '../common/toast'

export default function useProfileQuery() {
  const result = useQuery(
    ['/profile'],
    async () => {
      const { data } = await axios.post<App.ProfileResponce>('/profile')
      return data
    },
    {
      onError: e => {
        if (isAxiosError(e)) {
          uniqueToast(e.response.data.Message, e.response.data.Message)
        } else {
          error()
        }
      },
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
    }
  )

  const [name, setName] = useState(result?.data?.FirstName)
  const [surname, setSurname] = useState(result?.data?.LastName)
  const [middlename, setMiddlename] = useState(result?.data?.Surname)
  const [phone, setPhone] = useState(result?.data?.PhoneNumber)
  const [email, setEmail] = useState(result?.data?.Email)

  const initial = {
    name: name ?? '',
    setName: (e: React.ChangeEvent<HTMLInputElement>) =>
      setName(e.target.value),
    surname: surname ?? '',
    setSurname: (e: React.ChangeEvent<HTMLInputElement>) =>
      setSurname(e.target.value),
    middlename: middlename ?? '',
    setMiddlename: (e: React.ChangeEvent<HTMLInputElement>) =>
      setMiddlename(e.target.value),
    phone: phone ?? '',
    setPhone: (e: React.ChangeEvent<HTMLInputElement>) =>
      setPhone(e.target.value),
    email: email ?? '',
    setEmail: (e: React.ChangeEvent<HTMLInputElement>) =>
      setEmail(e.target.value),
  }

  return { ...result, ...initial }
}
