import type { Author } from '@prisma/client'

import { httpGetClient, isApiError } from '@/utils/http-client'

export const fetchAuthorList = async () => {
  const res = await httpGetClient<Author[]>({
    url: 'author-list',
  })

  if (isApiError(res)) {
    console.error(res)
    return res
  }

  return res
}
