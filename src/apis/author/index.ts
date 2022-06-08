import type { Author } from '@prisma/client'

import { httpPostClient, isApiError } from '@/utils/http-client'
import { handleApiError } from '@/store/app'
import type { ApiError } from '@/store/app'

export const saveAuthor = async (authorName: string) => {
  const res = await httpPostClient<Author, { name: string }>({
    url: 'author',
    params: { name: authorName },
  })

  if (isApiError(res)) {
    handleApiError(res as ApiError)
    return
  }

  return res
}
