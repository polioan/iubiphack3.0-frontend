import { useMutation } from '@tanstack/react-query'
import axios, { isAxiosError } from '../common/axios'
import { error, uniqueToast } from '../common/toast'

export default function useChangeProfileMutation() {
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

      await axios.post<{}>('/changeprofile', transformInput)
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

  return { ...result, changeProfile: result.mutate }
}
