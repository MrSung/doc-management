import { atom, useAtom } from 'jotai'

import type * as type from './type'

export * from './type'

export const apiErrorAtom = atom<type.ApiError>({
  message: undefined,
  code: undefined,
})
export const isApiErrorAtom = atom((get) =>
  Object.values(get(apiErrorAtom)).some((v) => typeof v !== 'undefined')
)

export const useHandleApiError = () => {
  const [, setApiError] = useAtom(apiErrorAtom)

  return (error: type.ApiError) => {
    setApiError({ message: error.message, code: error.code })
  }
}
