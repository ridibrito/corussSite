
import { Account } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'


import prisma from '../../lib/prisma'

type Data = {
  id: Number
  name: string
  slug: String
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const accounts = await prisma.account.findMany()
  res.status(200).json(accounts)
}
