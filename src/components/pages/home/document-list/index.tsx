import { useEffect } from 'react'
import { useAtom } from 'jotai'
import type { CreatedDocument, Directory } from '@prisma/client'

import { saveDocumentDelete } from '@/apis/document/delete'
import { saveDirectoryDelete } from '@/apis/directory/delete'
import { documentListAtom, directoryListAtom } from '@/store/pages/home'

import { TableRow } from './table-row'
import { useInitializeDocumentList, useInitializeDirectoryList } from '../hooks'

export const DocumentList = () => {
  const [documentList] = useAtom(documentListAtom)
  const [directoryList] = useAtom(directoryListAtom)

  const initializeDocumentList = useInitializeDocumentList()
  const initializeDirectoryList = useInitializeDirectoryList()

  const onClickDeleteDocumentButton = async (
    documentId: CreatedDocument['id']
  ) => {
    await saveDocumentDelete(documentId)

    initializeDocumentList()
  }
  const onClickDeleteDirectoryButton = async (directoryId: Directory['id']) => {
    await saveDirectoryDelete(directoryId)

    initializeDirectoryList()
  }

  useEffect(() => {
    Promise.all([initializeDocumentList(), initializeDirectoryList()])
  }, [])

  return (
    <div className="mt-8">
      <label className="label mb-4">
        <span className="label-text">List of files and directories</span>
      </label>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th />
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
            {directoryList.map((dir, i) => (
              <TableRow
                key={dir.id}
                index={i}
                directoryName={dir.name}
                authorName={dir.author.name}
                onClickDeleteButton={() => onClickDeleteDocumentButton(dir.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
