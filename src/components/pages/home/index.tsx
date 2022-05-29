import { DefaultTemplate } from '@/components/templates/default-template'

import { CreateAuthorForm } from './create-author-form'
import { AuthorList } from './author-list'
import { CreateDocumentForm } from './create-document-form'

export const Home = () => {
  return (
    <DefaultTemplate>
      <CreateAuthorForm />
      <AuthorList />
      <CreateDocumentForm />
    </DefaultTemplate>
  )
}
