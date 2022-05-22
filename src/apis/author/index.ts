import type { Author } from '@prisma/client'

import { httpPostClient, isAxiosError } from '@/utils/http-client'

export const saveAuthor = async (authorName: string) => {
  const res = await httpPostClient<Author, { name: string }>({
    url: 'author',
    params: { name: authorName },
  })

  if (isAxiosError(res)) {
    console.error(res)
    return res
  }

  return res
}
