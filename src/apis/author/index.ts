import { httpClient } from '@/utils/http-client'

export const saveAuthor = (authorName: string) => {
  httpClient.post<string>('author', { name: authorName })
}
