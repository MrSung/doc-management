import type { AxiosError } from 'axios'

export type ApiError = {
  message: AxiosError['message']
  code: AxiosError['code']
}
