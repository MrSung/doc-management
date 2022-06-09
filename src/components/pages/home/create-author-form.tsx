import React from 'react'
import { useAtom } from 'jotai'

import { saveAuthor } from '@/apis/author'
import type { ApiError } from '@/store/app'
import { useHandleApiError } from '@/store/app'
import { authorNameAtom, isAuthorNameValidAtom } from '@/store/pages/home'
import { isApiError } from '@/utils/http-client'

import { useInitializeAuthorList } from './hooks'

export const CreateAuthorForm = () => {
  const [authorName, setAuthorName] = useAtom(authorNameAtom)
  const [isAuthorNameValid] = useAtom(isAuthorNameValidAtom)

  const handleApiError = useHandleApiError()

  const initializeAuthorList = useInitializeAuthorList()

  const onChangeInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setAuthorName(ev.target.value)
  }
  const onKeyUpInput = async (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key.toLowerCase() !== 'enter') {
      return
    }

    const res = await saveAuthor(authorName)
    if (isApiError(res)) {
      handleApiError(res as ApiError)
      return
    }

    setAuthorName('')
    initializeAuthorList()
  }
  const onClickButton = async () => {
    const res = await saveAuthor(authorName)
    if (isApiError(res)) {
      handleApiError(res as ApiError)
      return
    }

    setAuthorName('')
    initializeAuthorList()
  }

  return (
    <div className="form-control grid gap-4 grid-rows-2 grid-cols-4 w-full max-w-lg mt-8">
      <label className="label col-start-1 col-end-5 row-start-1 row-end-2">
        <span className="label-text">Create author</span>
      </label>
      <input
        type="text"
        value={authorName}
        onChange={onChangeInput}
        onKeyUp={onKeyUpInput}
        placeholder="Type author name"
        className="input input-bordered col-start-1 col-end-4 w-full"
      />
      <button
        type="button"
        disabled={!isAuthorNameValid}
        onClick={onClickButton}
        className="btn btn-primary"
      >
        Add
      </button>
    </div>
  )
}
