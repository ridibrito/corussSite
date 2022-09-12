import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]"
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

type TenantData = {
    id: string
    name: string
    slug: string

  }

  export default async function Tenant(req: NextApiRequest, res:NextApiResponse<TenantData[]>) {
    console.log(req.body, req)
    const session = await unstable_getServerSession(req, res, authOptions)
  
    if (session) {
      const tenants = await prisma.tenant.findMany({
        where:{
          users:{
            some:{
              //@ts-ignore
              userId: session.user.id
            }
          }
        }
      })
      console.log(tenants)
      res.send(tenants)
    } else {
      res.send([])
    }
  }