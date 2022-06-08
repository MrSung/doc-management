import type { CreatedDocument } from '@prisma/client'

import { httpPostClient, isApiError } from '@/utils/http-client'
import { handleApiError } from '@/store/app'
import type { ApiError } from '@/store/app'

type SaveDocumentParams = {
  name: CreatedDocument['filename']
  title?: CreatedDocument['title']
  content?: CreatedDocument['content']
  directoryId: CreatedDocument['directoryId']
  authorId: CreatedDocument['authorId']
}

export const saveDocument = async (params: SaveDocumentParams) => {
  const res = await httpPostClient<
    CreatedDocument,
    Omit<SaveDocumentParams, 'name'> & { filename: CreatedDocument['filename'] }
  >({
    url: 'document',
    params: {
      filename: params.name,
      title: params.title ?? '',
      content: params.content ?? '',
      directoryId: params.directoryId,
      authorId: params.authorId,
    },
  })

  if (isApiError(res)) {
    handleApiError(res as ApiError)
    return
  }

  return res
}
