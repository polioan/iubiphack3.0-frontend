import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import axios, { isAxiosError } from '../common/axios'
import { error, uniqueToast } from '../common/toast'

export default function useProfileQuery() {
  const result = useQuery(
    ['/profile'],
    async () => {
      const { data } = await axios.post<App.ProfileResponce>('/profile')
      console.log(data)
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

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [middlename, setMiddlename] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (!result.isSuccess) return
    setName(result.data?.FirstName)
    setSurname(result.data?.LastName)
    setMiddlename(result.data?.Surname)
    setPhone(result.data?.PhoneNumber)
    setEmail(result.data?.Email)
  }, [result.isSuccess])

  const initial = {
    name,
    setName: (e: React.ChangeEvent<HTMLInputElement>) =>
      setName(e.target.value),
    surname,
    setSurname: (e: React.ChangeEvent<HTMLInputElement>) =>
      setSurname(e.target.value),
    middlename,
    setMiddlename: (e: React.ChangeEvent<HTMLInputElement>) =>
      setMiddlename(e.target.value),
    phone,
    setPhone: (e: React.ChangeEvent<HTMLInputElement>) =>
      setPhone(e.target.value),
    email,
    setEmail: (e: React.ChangeEvent<HTMLInputElement>) =>
      setEmail(e.target.value),
  }

  return { ...result, ...initial }
}
