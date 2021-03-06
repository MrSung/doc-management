import { useEffect } from 'react'
import { useAtom } from 'jotai'
import type { CreatedDocument } from '@prisma/client'

import { saveDocumentDelete } from '@/apis/document/delete'
import type { ApiError } from '@/store/app'
import { useHandleApiError } from '@/store/app'
import { documentListAtom } from '@/store/pages/home'
import { isApiError } from '@/utils/http-client'

import { TableRow } from './table-row'
import { useInitializeDocumentList, useInitializeDirectoryList } from './hooks'

export const DocumentList = () => {
  const [documentList] = useAtom(documentListAtom)

  const handleApiError = useHandleApiError()

  const initializeDocumentList = useInitializeDocumentList()
  const initializeDirectoryList = useInitializeDirectoryList()

  const onClickDeleteDocumentButton = async (
    documentId: CreatedDocument['id']
  ) => {
    const res = await saveDocumentDelete(documentId)
    if (isApiError(res)) {
      handleApiError(res as ApiError)
      return
    }

    initializeDocumentList()
    initializeDirectoryList()
  }

  useEffect(() => {
    initializeDocumentList()
  }, [])

  return (
    <div className="mt-8">
      <label className="label mb-4">
        <span className="label-text">List of files</span>
      </label>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Directory</th>
              <th>Filename</th>
              <th>Author</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {documentList.map((doc, i) => (
              <TableRow
                key={doc.id}
                index={i}
                directoryName={doc.directory.name}
                filename={doc.filename}
                authorName={doc.author.name}
                onClickDeleteButton={() => onClickDeleteDocumentButton(doc.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
