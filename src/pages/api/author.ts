import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await prisma.author.create({
    data: {
      ...req.body,
    },
  })
  res.json(result)
}

export default handle
