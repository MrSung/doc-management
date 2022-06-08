import { httpGetClient, isApiError } from '@/utils/http-client'
import { handleApiError } from '@/store/app'
import type { ApiError } from '@/store/app'
import type { JoinedCreatedDocument } from '@/store/pages/home'

export const fetchDocumentList = async () => {
  const res = await httpGetClient<JoinedCreatedDocument[]>({
    url: 'document-list',
  })

  if (isApiError(res)) {
    handleApiError(res as ApiError)
    return
  }

  return res
}
