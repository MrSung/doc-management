import { useAtom } from 'jotai'

import { fetchAuthorList } from '@/apis/author-list'
import { fetchDocumentList } from '@/apis/document-list'
import { authorListAtom, documentListAtom } from '@/store/pages/home'

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
