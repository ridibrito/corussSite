import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]"
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'


type TenantData = {
    id: string
    name: string
    slug: string
    
  }
  interface ILead {
    id: string
    name: string
    tipoPlano: string
    operadora: string
    administradora: string
    valor: number
  }
  export default async function Tenant(req: NextApiRequest, res:NextApiResponse<TenantData[]>) {
    const session = await unstable_getServerSession(req, res, authOptions)
  
    if (session) {
      const tenantId = String(req.query.tenantId)
      if(req.method === 'POST'){
      const leadData = {
        name: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email,          
        tipoPlano: req.body.tipoPlano,        
        administradora: req.body.administradora,   
        operadora: req.body.operadora,        
        valor: req.body.valor,           
        tenantId
      }


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
      const savedLead = await prisma.lead.create({
        data: leadData
      })
               //@ts-ignore
      return res.send(savedLead)
    }

    const leads = await prisma.lead.findMany({
      where:{
        tenantId:{
          equals: tenantId
        }
      }
    })               

//@ts-ignore
    return res.send(leads)
    } else {
      res.send([])
    }
  }