import type { Directory } from '@prisma/client'

import { httpPostClient, isApiError } from '@/utils/http-client'

export const saveDirectoryDelete = async (directoryId: string) => {
  const res = await httpPostClient<Directory, { id: string }>({
    url: 'directory/delete',
    params: { id: directoryId },
  })

  if (isApiError(res)) {
    console.error(res)
    return res
  }

  return res
}
