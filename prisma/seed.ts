import { PrismaClient } from '@prisma/client'
import type { Author } from '@prisma/client'
import { ulid } from 'ulid'

const prisma = new PrismaClient()

const authorData: Author[] = [
  {
    name: 'A.S. Muncher',
  },
  {
    name: 'Ben Derhover',
  },
  {
    name: 'C. Mike Rack',
  },
  {
    name: 'Dang Lin-Wang',
  },
].map((a) => ({ ...a, id: ulid() }))

async function main() {
  console.log(`Start seeding ...`)
  for (const a of authorData) {
    const user = await prisma.author.create({
      data: a,
    })
    console.log(`Created author with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
