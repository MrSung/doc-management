import type { ChangeEvent, KeyboardEvent } from 'react'
import { useState } from 'react'

import { saveAuthor } from '@/apis/author'

export const Author = () => {
  const [authorName, setAuthorName] = useState('')

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setAuthorName(ev.target.value)
  }
  const onKeyUp = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.key.toLowerCase() !== 'enter') {
      return
    }

    saveAuthor(authorName)
  }

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Create anonymous user</span>
      </label>
      <input
        type="text"
        value={authorName}
        onChange={onChange}
        onKeyUp={onKeyUp}
        placeholder="Type author name here"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  )
}
