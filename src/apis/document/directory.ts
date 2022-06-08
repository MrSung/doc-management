import type { Directory } from '@prisma/client'

import { httpPostClient, isApiError } from '@/utils/http-client'
import { handleApiError } from '@/store/app'
import type { ApiError } from '@/store/app'

type SaveDocumentDirectoryParams = {
  name: Directory['name']
  authorId: Directory['authorId']
}

export const saveDocumentDirectory = async (
  params: SaveDocumentDirectoryParams
) => {
  const res = await httpPostClient<Directory, SaveDocumentDirectoryParams>({
    url: 'document/directory',
    params: { ...params },
  })

  if (isApiError(res)) {
    handleApiError(res as ApiError)
    return
  }

  return res
}
