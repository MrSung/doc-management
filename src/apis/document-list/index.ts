import { httpGetClient } from '@/utils/http-client'
import type { JoinedCreatedDocument } from '@/store/pages/home'

export const fetchDocumentList = async () => {
  const res = await httpGetClient<JoinedCreatedDocument[]>({
    url: 'document-list',
  })

  return res
}
