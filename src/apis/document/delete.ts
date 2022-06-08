import type { CreatedDocument } from '@prisma/client'

import { httpPostClient, isApiError } from '@/utils/http-client'
import { handleApiError } from '@/store/app'
import type { ApiError } from '@/store/app'

export const saveDocumentDelete = async (documentId: string) => {
  const res = await httpPostClient<CreatedDocument, { id: string }>({
    url: 'document/delete',
    params: { id: documentId },
  })

  if (isApiError(res)) {
    handleApiError(res as ApiError)
    return
  }

  return res
}
