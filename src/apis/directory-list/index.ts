import type { Directory } from '@prisma/client'

import { httpGetClient, isApiError } from '@/utils/http-client'

export const fetchDirectoryList = async () => {
  const res = await httpGetClient<Directory[]>({
    url: 'directory-list',
  })

  if (isApiError(res)) {
    console.error(res)
    return res
  }

  return res
}
