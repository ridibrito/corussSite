import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

type TenantData = {
    id: string
    name: string
    slug: string

  }

  export default async function Tenant(req: NextApiRequest, res:NextApiResponse<TenantData[]>) {
    const session = await unstable_getServerSession(req, res, authOptions)
  
    if (!session) {
      const tenants = await prisma.tenant.findMany({
        where: {
          users: {
            some: {
              //@ts-ignore
              userId: session.user.id
            }
          }
        }
      })
      
         //@ts-ignore
      res.status(401).json({ message: "You must be logged in." });
      return;
    }
    console.log(session)
  //@ts-ignore
    return res.json()
  }