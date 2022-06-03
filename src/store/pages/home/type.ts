import type { Author, CreatedDocument, Directory } from '@prisma/client'

export { Author, Directory }

export type JoinedCreatedDocument = CreatedDocument & { author: Author } & {
  directory: Directory
}

export type JoinedDirectory = Directory & { author: Author }
