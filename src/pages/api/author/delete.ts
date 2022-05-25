import type { NextApiRequest, NextApiResponse } from 'next'
import type { Author } from '@prisma/client'

import prisma from '@/libs/prisma'

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  let result: Author | undefined

  switch (req.method) {
    case 'GET':
      break
    case 'POST':
      result = await prisma.author.delete({
        where: {
          id: req.body.id,
        },
      })
      res.json(result)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
      break
  }
}

export default handle
