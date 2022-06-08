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
  const promise = axiosInstance
    .get(args.url, args.params ?? undefined)
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })

  return promise
}

export const httpPostClient = <T, K>(args: {
  url: string
  params: K
}): AxiosPromise<T> => {
  const promise = axiosInstance
    .post(args.url, args.params)
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })

  return promise
}
