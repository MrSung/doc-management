import type { Author } from '@prisma/client'

import { httpGetClient } from '@/utils/http-client'

export const fetchAuthorList = async () => {
  const res = await httpGetClient<Author[]>({
    url: 'author-list',
  })

  return res
}
