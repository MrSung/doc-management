import { httpGetClient, isApiError } from '@/utils/http-client'
import { handleApiError } from '@/store/app'
import type { ApiError } from '@/store/app'
import type { JoinedDirectory } from '@/store/pages/home'

export const fetchDirectoryList = async () => {
  const res = await httpGetClient<JoinedDirectory[]>({
    url: 'directory-list',
  })

  if (isApiError(res)) {
    handleApiError(res as ApiError)
    return
  }

  return res
}
