import axios, {
  isAxiosError as isAxiosErrorInternal,
  AxiosError,
  AxiosResponse,
} from 'axios'
import { uniqueToast } from './toast'
import { error } from '../common/toast'

export * from 'axios'

const baseURL = import.meta.env.VITE_BASE_API_URL

const instance = axios.create({
  baseURL,
})

instance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem(
    'token'
  )}`

  return config
})

interface CustomAxiosError extends AxiosError<App.ServerErrorData, unknown> {
  response: AxiosResponse<App.ServerErrorData, unknown>
}

export function isAxiosError(payload: any): payload is CustomAxiosError {
  return (
    isAxiosErrorInternal(payload) &&
    typeof payload?.response?.data?.Message === 'string'
  )
}

instance.interceptors.response.use(
  config => config,
  async e => {
    const originalRequest = e.config
    if (
      (e?.response?.status == 401 || e?.response?.status == 403) &&
      e?.config &&
      !e?.config._isRetry &&
      window.location.pathname !== '/login'
    ) {
      originalRequest._isRetry = true
      try {
        const response = await axios.get<App.RefreshResponce>(
          `${baseURL}/refresh`
        )
        window.localStorage.setItem('token', response.data.AccessToken)
        return instance.request(originalRequest)
      } catch (e) {
        if (isAxiosError(e)) {
          uniqueToast(e.response.data.Message, e.response.data.Message)
        } else {
          error()
        }
      }
    }
    throw e
  }
)

export default instance
