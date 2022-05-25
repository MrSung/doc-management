import type { Author } from '@prisma/client'

import { httpPostClient, isAxiosError } from '@/utils/http-client'

export const saveAuthorDelete = async (authorId: string) => {
  const res = await httpPostClient<Author, { id: string }>({
    url: 'author/delete',
    params: { id: authorId },
  })

  if (isAxiosError(res)) {
    console.error(res)
    return res
  }

  return res
}
