import { useEffect } from 'react'
import { useAtom } from 'jotai'
import type { CreatedDocument, Directory } from '@prisma/client'

import { saveDocumentDelete } from '@/apis/document/delete'
import { saveDirectoryDelete } from '@/apis/directory/delete'
import { documentListAtom, directoryListAtom } from '@/store/pages/home'

import { useInitializeDocumentList, useInitializeDirectoryList } from './hooks'

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
              <tr key={doc.id}>
                <th>{i + 1}</th>
                <td>{doc.directory.name}/</td>
                <td>{doc.filename}</td>
                <td>{doc.author.name}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => onClickDeleteDocumentButton(doc.id)}
                    className="btn btn-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
            {directoryList.map((dir, i) => (
              <tr key={dir.id}>
                <th>{i + 1}</th>
                <td>{dir.name}/</td>
                <td />
                <td>{dir.author.name}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => onClickDeleteDirectoryButton(dir.id)}
                    className="btn btn-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
