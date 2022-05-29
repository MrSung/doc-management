import type { NextApiRequest, NextApiResponse } from 'next'

export enum AllowedMethod {
  Get = 'GET',
  Post = 'POST',
}

export const handleException = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Allow', [AllowedMethod.Get, AllowedMethod.Post])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
