import { useEffect } from 'react'
import { useAtom } from 'jotai'

import { documentListAtom } from '@/store/pages/home'

import { useInitializeDocumentList } from './hooks'

export const DocumentList = () => {
  const [documentList] = useAtom(documentListAtom)

  const initializeDocumentList = useInitializeDocumentList()

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
            </tr>
          </thead>
          <tbody>
            {documentList.map((doc, i) => (
              <tr key={doc.id}>
                <th>{i + 1}</th>
                <td>{doc.directory.name}</td>
                <td>{doc.filename}</td>
                <td>{doc.author.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
