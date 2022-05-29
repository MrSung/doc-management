import { atom } from 'jotai'
import type { Author } from '@prisma/client'

export const authorNameAtom = atom('')
export const isAuthorNameValidAtom = atom((get) => get(authorNameAtom) !== '')

export const authorListAtom = atom<Author[]>([])
export const selectedAuthorIdAtom = atom<Author['id']>('')
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
