import type { Author } from '@prisma/client'

import { httpGetClient, isApiError } from '@/utils/http-client'
import { handleApiError } from '@/store/app'
import type { ApiError } from '@/store/app'

export const fetchAuthorList = async () => {
  const res = await httpGetClient<Author[]>({
    url: 'author-list',
  })

  if (isApiError(res)) {
    handleApiError(res as ApiError)
    return
  }

  return res
}
