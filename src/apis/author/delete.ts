import type { Author } from '@prisma/client'

import { httpPostClient, isApiError } from '@/utils/http-client'
import { handleApiError } from '@/store/app'
import type { ApiError } from '@/store/app'

export const saveAuthorDelete = async (authorId: string) => {
  const res = await httpPostClient<Author, { id: string }>({
    url: 'author/delete',
    params: { id: authorId },
  })

  if (isApiError(res)) {
    handleApiError(res as ApiError)
    return
  }

  return res
}
