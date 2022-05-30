import type { AxiosInstance, AxiosPromise } from 'axios'
import axios from 'axios'

export const isApiError = axios.isAxiosError

const axiosInstance: AxiosInstance = axios.create({
  baseURL: '/api/',
})

export const httpGetClient = <T, K = undefined>(args: {
  url: string
  params?: K
}): AxiosPromise<T> => {
  try {
    const res: AxiosPromise<T> = axiosInstance.get(
      args.url,
      args.params ?? undefined
    )

    return res
  } catch (error) {
    return error
  }
}

export const httpPostClient = <T, K>(args: {
  url: string
  params: K
}): AxiosPromise<T> => {
  try {
    const res: AxiosPromise<T> = axiosInstance.post(args.url, args.params)

    return res
  } catch (error) {
    return error
  }
}
