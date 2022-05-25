import { useState, useEffect } from 'react'
import type { Author } from '@prisma/client'

import { fetchAuthorList } from '@/apis/author-list'
import { saveAuthorDelete } from '@/apis/author/delete'

export const AuthorList = () => {
  const [authorList, setAuthorList] = useState<Author[]>([])

  const initializeAuthorList = async () => {
    const res = await fetchAuthorList()
    const authorList = res.data

    setAuthorList(authorList)
  }

  const onClickDeleteButton = async (authorId: Author['id']) => {
    await saveAuthorDelete(authorId)
    initializeAuthorList()
  }

  useEffect(() => {
    initializeAuthorList()
  }, [])

  return (
    <div className="mt-8">
      {authorList.map((author) => (
        <div key={author.id} className="badge badge-lg gap-2 mb-2 mr-2">
          <button
            type="button"
            onClick={() => onClickDeleteButton(author.id)}
            className="flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-4 h-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <span>{author.name}</span>
        </div>
      ))}
    </div>
  )
}
