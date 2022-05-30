import type { CreatedDocument } from '@prisma/client'

import { httpGetClient, isApiError } from '@/utils/http-client'

export const fetchDocumentList = async () => {
  const res = await httpGetClient<CreatedDocument[]>({
    url: 'document-list',
  })

  if (isApiError(res)) {
    console.error(res)
    return res
  }

  return res
}
