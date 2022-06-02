import type { NextApiRequest, NextApiResponse } from 'next'
import type { CreatedDocument } from '@prisma/client'

import prisma from '@/libs/prisma'
import { AllowedMethod, handleException } from '@/utils/api-helper'

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  let result: CreatedDocument | undefined

  switch (req.method) {
    case AllowedMethod.Get:
      break
    case AllowedMethod.Post:
      result = await prisma.createdDocument.create<{ data: CreatedDocument }>({
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
