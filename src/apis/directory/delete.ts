import type { Directory } from '@prisma/client'

import { httpPostClient } from '@/utils/http-client'

export const saveDirectoryDelete = async (directoryId: string) => {
  const res = await httpPostClient<Directory, { id: string }>({
    url: 'directory/delete',
    params: { id: directoryId },
  })

  return res
}
