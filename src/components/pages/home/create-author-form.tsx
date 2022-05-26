import React from 'react'
import { useAtom } from 'jotai'

import { saveAuthor } from '@/apis/author'
import { authorNameAtom, isAuthorNameEmptyAtom } from '@/store/pages/home'

import { useInitializeAuthorList } from './hooks'

export const CreateAuthorForm = () => {
  const [authorName, setAuthorName] = useAtom(authorNameAtom)
  const [isAuthorNameEmpty] = useAtom(isAuthorNameEmptyAtom)

  const initializeAuthorList = useInitializeAuthorList()

  const onChangeInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setAuthorName(ev.target.value)
  }
  const onKeyUpInput = async (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (isAuthorNameEmpty || ev.key.toLowerCase() !== 'enter') {
      return
    }

    await saveAuthor(authorName)
    setAuthorName('')
    initializeAuthorList()
  }
  const onClickButton = async () => {
    if (isAuthorNameEmpty) {
      return
    }

    await saveAuthor(authorName)
    setAuthorName('')
    initializeAuthorList()
  }

  return (
    <form className="form-control grid gap-x-4 grid-rows-2 grid-cols-4 w-full max-w-lg mt-8">
      <label className="label col-start-1 col-end-5 row-start-1 row-end-2">
        <span className="label-text">Create anonymous author</span>
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
        disabled={isAuthorNameEmpty}
        onClick={onClickButton}
        className="btn btn-primary"
      >
        Add
      </button>
    </form>
  )
}
