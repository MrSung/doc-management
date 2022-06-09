import { useAtom } from 'jotai'

import { saveDocumentDirectory } from '@/apis/document/directory'
import { saveDocument } from '@/apis/document'
import type { ApiError } from '@/store/app'
import { useHandleApiError } from '@/store/app'
import {
  selectedAuthorIdAtom,
  directoryAtom,
  filenameAtom,
  isAuthorIdSelectedAtom,
  isDirectoryValidAtom,
  isFilenameValidAtom,
} from '@/store/pages/home'
import { isApiError } from '@/utils/http-client'

import { useInitializeDocumentList, useInitializeDirectoryList } from './hooks'

export const CreateDocumentForm = () => {
  const [directory, setDirectory] = useAtom(directoryAtom)
  const [filename, setFilename] = useAtom(filenameAtom)
  const [selectedAuthorId] = useAtom(selectedAuthorIdAtom)
  const [isAuthorIdSelected] = useAtom(isAuthorIdSelectedAtom)
  const [isDirectoryValid] = useAtom(isDirectoryValidAtom)
  const [isFilenameValid] = useAtom(isFilenameValidAtom)

  const isSubmitEnabled =
    isAuthorIdSelected && isDirectoryValid && isFilenameValid

  const handleApiError = useHandleApiError()

  const initializeDocumentList = useInitializeDocumentList()
  const initializeDirectoryList = useInitializeDirectoryList()

  const onClickButton = async () => {
    const docDirRes = await saveDocumentDirectory({
      name: directory,
      authorId: selectedAuthorId,
    })
    if (isApiError(docDirRes)) {
      handleApiError(docDirRes as ApiError)
      return
    }

    const { authorId, id: directoryId } = docDirRes.data

    if (filename !== '') {
      const docRes = await saveDocument({
        name: filename,
        directoryId,
        authorId,
      })
      if (isApiError(docRes)) {
        handleApiError(docRes as ApiError)
        return
      }
    }

    setDirectory('')
    setFilename('')
    initializeDocumentList()
    initializeDirectoryList()
  }

  return (
    <div className="form-control grid gap-4 grid-rows-2 grid-cols-4 w-full max-w-2xl mt-8">
      <label className="label col-start-1 col-end-5 row-start-1 row-end-2">
        <span className="label-text">
          Create document (author needs to be selected)
        </span>
      </label>
      <input
        type="text"
        value={directory}
        onChange={(ev) => setDirectory(ev.target.value)}
        placeholder="Type directory path (slash-delemeted text, no trailing slash)"
        className="input input-bordered col-start-1 col-end-5 w-full"
      />
      <input
        type="text"
        value={filename}
        onChange={(ev) => setFilename(ev.target.value)}
        placeholder="Type document filename"
        className="input input-bordered col-start-1 col-end-4 w-full"
      />
      <button
        type="button"
        disabled={!isSubmitEnabled}
        onClick={onClickButton}
        className="btn btn-primary"
      >
        Create
      </button>
    </div>
  )
}
