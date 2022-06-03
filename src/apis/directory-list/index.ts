import { httpGetClient, isApiError } from '@/utils/http-client'
import type { JoinedDirectory } from '@/store/pages/home'

export const fetchDirectoryList = async () => {
  const res = await httpGetClient<JoinedDirectory[]>({
    url: 'directory-list',
  })

  if (isApiError(res)) {
    console.error(res)
    return res
  }

  return res
}
