import { DefaultTemplate } from '@/components/templates/default-template'

import { CreateAuthorForm } from './create-author-form'
import { AuthorList } from './author-list'

export const Home = () => {
  return (
    <DefaultTemplate>
      <CreateAuthorForm />
      <AuthorList />
    </DefaultTemplate>
  )
}
