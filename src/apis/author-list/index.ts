import type { Author } from '@prisma/client'

import { httpGetClient, isAxiosError } from '@/utils/http-client'

export const fetchAuthorList = async () => {
  const res = await httpGetClient<Author[]>({
    url: 'author-list',
  })

  if (isAxiosError(res)) {
    console.error(res)
    return res
  }

  return res
}
