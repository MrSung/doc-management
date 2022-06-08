import { useEffect } from 'react'
import { useAtom } from 'jotai'
import type { Directory } from '@prisma/client'

import { saveDirectoryDelete } from '@/apis/directory/delete'
import { directoryListAtom } from '@/store/pages/home'

import { TableRow } from './table-row'
import { useInitializeDocumentList, useInitializeDirectoryList } from './hooks'

export const DirectoryList = () => {
  const [directoryList] = useAtom(directoryListAtom)

  const initializeDocumentList = useInitializeDocumentList()
  const initializeDirectoryList = useInitializeDirectoryList()

  const onClickDeleteDirectoryButton = async (directoryId: Directory['id']) => {
    await saveDirectoryDelete(directoryId)

    initializeDocumentList()
    initializeDirectoryList()
  }

  useEffect(() => {
    initializeDirectoryList()
  }, [])

  return (
    <div className="mt-8">
      <label className="label mb-4">
        <span className="label-text">List of directories</span>
      </label>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Directory</th>
              <th>Author</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {directoryList.map((dir, i) => (
              <TableRow
                key={dir.id}
                index={i}
                directoryName={dir.name}
                authorName={dir.author.name}
                onClickDeleteButton={() => onClickDeleteDirectoryButton(dir.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
