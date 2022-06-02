import { useAtom } from 'jotai'

import { fetchAuthorList } from '@/apis/author-list'
import { fetchDocumentList } from '@/apis/document-list'
import { fetchDirectoryList } from '@/apis/directory-list'
import {
  authorListAtom,
  documentListAtom,
  directoryListAtom,
} from '@/store/pages/home'

export const useInitializeAuthorList = () => {
  const [, setAuthorList] = useAtom(authorListAtom)

  return async () => {
    const res = await fetchAuthorList()
    const authorList = res.data

    setAuthorList(authorList)
  }
}

export const useInitializeDocumentList = () => {
  const [, setDocumentList] = useAtom(documentListAtom)

  return async () => {
    const res = await fetchDocumentList()
    const documentList = res.data

    setDocumentList(documentList)
  }
}

export const useInitializeDirectoryList = () => {
  const [, setDirectoryList] = useAtom(directoryListAtom)

  return async () => {
    const res = await fetchDirectoryList()
    const directoryList = res.data

    setDirectoryList(directoryList)
  }
}
