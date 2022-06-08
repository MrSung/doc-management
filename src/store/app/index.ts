import { atom } from 'jotai'

import type * as type from './type'

export * from './type'

export const apiErrorAtom = atom<type.ApiError>(undefined)
export const isApiErrorAtom = atom(
  (get) => typeof get(apiErrorAtom) !== 'undefined'
)
