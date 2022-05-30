import type { Author } from '@prisma/client'

import { httpPostClient, isApiError } from '@/utils/http-client'

export const saveAuthorDelete = async (authorId: string) => {
  const res = await httpPostClient<Author, { id: string }>({
    url: 'author/delete',
    params: { id: authorId },
  })

  if (isApiError(res)) {
    console.error(res)
    return res
  }

  return res
}
