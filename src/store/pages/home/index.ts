import { atom } from 'jotai'

import type * as type from './type'

export * from './type'

export const authorNameAtom = atom('')
export const isAuthorNameValidAtom = atom((get) => get(authorNameAtom) !== '')

export const authorListAtom = atom<type.Author[]>([])
export const selectedAuthorIdAtom = atom<type.Author['id']>('')
export const isAuthorIdSelectedAtom = atom(
  (get) => get(selectedAuthorIdAtom) !== ''
)

export const directoryAtom = atom('')
export const isDirectoryValidAtom = atom((get) => {
  const directory = get(directoryAtom)

  return directory !== '' && !!/(.+)\/*([^/]+)$/.test(directory)
})

export const filenameAtom = atom('')
export const isFilenameValidAtom = atom((get) => {
  const filename = get(filenameAtom)
  const allowedCharsRegex = /^[^\\/:*?"<>|]+$/
  const startsWithDotRegex = /^\./
  const forbiddenFilenameRegex = /^(nul|prn|con|lpt[0-9]|com[0-9])(\.|$)/i

  return (
    filename !== '' &&
    allowedCharsRegex.test(filename) &&
    !startsWithDotRegex.test(filename) &&
    !forbiddenFilenameRegex.test(filename)
  )
})

export const documentListAtom = atom<type.JoinedCreatedDocument[]>([])

export const directoryListAtom = atom<type.Directory[]>([])
