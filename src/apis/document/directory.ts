import type { Directory } from '@prisma/client'

import { httpPostClient, isAxiosError } from '@/utils/http-client'

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

  if (isAxiosError(res)) {
    console.error(res)
    return res
  }

  return res
}
