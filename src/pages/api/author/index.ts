import type { NextApiRequest, NextApiResponse } from 'next'
import type { Author } from '@prisma/client'

import prisma from '@/libs/prisma'
import { AllowedMethod, handleException } from '@/utils/api-helper'

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  let result: Author | undefined

  switch (req.method) {
    case AllowedMethod.Get:
      break
    case AllowedMethod.Post:
      result = await prisma.author.create<{ data: Author }>({
        data: {
          ...req.body,
        },
      })
      return res.json(result)
    default:
      handleException(req, res)
      break
  }
}

export default handle
