import type { Author } from '@prisma/client'

import { httpPostClient, isApiError } from '@/utils/http-client'

export const saveAuthor = async (authorName: string) => {
  const res = await httpPostClient<Author, { name: string }>({
    url: 'author',
    params: { name: authorName },
  })

  if (isApiError(res)) {
    console.error(res)
    return res
  }

  return res
}
