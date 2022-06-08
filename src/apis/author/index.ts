import type { Author } from '@prisma/client'

import { httpPostClient } from '@/utils/http-client'

export const saveAuthor = async (authorName: string) => {
  const res = await httpPostClient<Author, { name: string }>({
    url: 'author',
    params: { name: authorName },
  })

  return res
}
