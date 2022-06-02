import { useEffect } from 'react'
import { useAtom } from 'jotai'
import type { CreatedDocument } from '@prisma/client'

import { saveDocumentDelete } from '@/apis/document/delete'
import { documentListAtom } from '@/store/pages/home'

import { useInitializeDocumentList } from './hooks'

export const DocumentList = () => {
  const [documentList] = useAtom(documentListAtom)

  const initializeDocumentList = useInitializeDocumentList()

  const onClickDeleteButton = async (documentId: CreatedDocument['id']) => {
    await saveDocumentDelete(documentId)

    initializeDocumentList()
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
                <td>{doc.directory.name}</td>
                <td>{doc.filename}</td>
                <td>{doc.author.name}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => onClickDeleteButton(doc.id)}
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
