import type { Author, CreatedDocument, Directory } from '@prisma/client'

export { Author }

export type JoinedCreatedDocument = CreatedDocument & { author: Author } & {
  directory: Directory
}
