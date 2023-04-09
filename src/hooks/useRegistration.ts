import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import axios, { isAxiosError } from '../common/axios'
import { error, uniqueToast } from '../common/toast'

export default function useRegistration() {
  const navigate = useNavigate()

  const result = useMutation({
    mutationFn: async ({
      name,
      surname,
      middlename,
      phone,
      email,
      password,
    }: {
      name: string
      surname: string
      middlename: string
      phone: string
      email: string
      password: string
    }) => {
      const transformInput: App.RegisterInput = {
        FirstName: name,
        LastName: surname,
        Surname: middlename,
        PhoneNumber: phone,
        Email: email,
        Password: password,
      }

      const { data } = await axios.post<App.RegisterResponce>(
        '/register',
        transformInput
      )
      return data
    },
    onSuccess: data => {
      window.localStorage.setItem('token', data.AccessToken)
      navigate('/cab')
    },
    onError: e => {
      if (isAxiosError(e)) {
        uniqueToast(e.response.data.Message, e.response.data.Message)
      } else {
        error()
      }
    },
    retry: 1,
  })

  return { ...result, register: result.mutate }
}
