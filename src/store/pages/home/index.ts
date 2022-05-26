import { atom } from 'jotai'
import type { Author } from '@prisma/client'

export const authorNameAtom = atom('')
export const isAuthorNameEmptyAtom = atom((get) => get(authorNameAtom) === '')

export const authorListAtom = atom<Author[]>([])
