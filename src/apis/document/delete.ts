import type { CreatedDocument } from '@prisma/client'

import { httpPostClient } from '@/utils/http-client'

export const saveDocumentDelete = async (documentId: string) => {
  const res = await httpPostClient<CreatedDocument, { id: string }>({
    url: 'document/delete',
    params: { id: documentId },
  })

  return res
}
