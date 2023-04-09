import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import axios, { isAxiosError } from '../common/axios'
import { error, uniqueToast } from '../common/toast'

export default function useLogin() {
  const navigate = useNavigate()

  const result = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string
      password: string
    }) => {
      const transformInput: App.LoginInput = {
        Email: email,
        Password: password,
      }

      const { data } = await axios.post<App.LoginResponce>(
        '/login',
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

  return { ...result, login: result.mutate }
}
