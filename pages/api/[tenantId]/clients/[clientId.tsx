import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]"
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

type TenantData = {
    id?: String
    success: boolean
  }

  export default async function Tenant(req: NextApiRequest, res:NextApiResponse<TenantData>) {
    const session = await unstable_getServerSession(req, res, authOptions)
  
    if (session) {
        const tenantId = String(req.query.tenantId)
        const clientId = String(req.query.clientId)
      if(req.method === 'DELETE'){
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
      await prisma.client.delete({
        where: {
            id: clientId

        }
      })

      
      return res.send({ id: clientId, success: true })
    }

   
    return res.send({ id:clientId, success: false})
    } else {
      res.send({ success: false})
    }
  }