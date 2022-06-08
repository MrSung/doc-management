import type { Directory } from '@prisma/client'

import { httpPostClient, isApiError } from '@/utils/http-client'
import { handleApiError } from '@/store/app'
import type { ApiError } from '@/store/app'

export const saveDirectoryDelete = async (directoryId: string) => {
  const res = await httpPostClient<Directory, { id: string }>({
    url: 'directory/delete',
    params: { id: directoryId },
  })

  if (isApiError(res)) {
    handleApiError(res as ApiError)
    return
  }

  return res
}
