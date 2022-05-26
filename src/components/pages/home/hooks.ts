import { useAtom } from 'jotai'

import { fetchAuthorList } from '@/apis/author-list'
import { authorListAtom } from '@/store/pages/home'

export const useInitializeAuthorList = () => {
  const [, setAuthorList] = useAtom(authorListAtom)

  return async () => {
    const res = await fetchAuthorList()
    const authorList = res.data

    setAuthorList(authorList)
  }
}
