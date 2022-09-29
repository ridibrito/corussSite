import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]"
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'


type TenantData = {
    id: string
    name: string
    slug: string
    
  }
  interface client {
    id: string
    name: string
    tipoPlano: string
    operadora: string
    administradora: string
    dataVigencia: string
    valor: number
  }
  export default async function Tenant(req: NextApiRequest, res:NextApiResponse<TenantData[]>) {
    const session = await unstable_getServerSession(req, res, authOptions)
  
    if (session) {
      const tenantId = String(req.query.tenantId)
      if(req.method === 'POST'){
      const clientData = {
        name: req.body.nome,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        email: req.body.email,          
        dataNascimento: req.body.dataNascimento,  
        sexo: req.body.sexo,             
        Nproposta: req.body.Nproposta,       
        dataVenda: req.body.dataVenda,        
        dataVigencia: req.body.dataVigencia,     
        valor: req.body.valor,           
        tipoPlano: req.body.tipoPlano,        
        administradora: req.body.administradora,   
        operadora: req.body.operadora,        
        qtsVidas: req.body.qtsVidas,        
        comissao: req.body.comissao,         
        taxaAdesao: req.body.taxaAdesao,       
        valorTaxa: req.body.valorTaxa,        
        bonificacao: req.body.bonificacao,      
        valorBonificacao: req.body.valorBonificacao,
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
      const savedClient = await prisma.client.create({
        data: clientData
      })

      return res.send(savedClient)
    }

    const clients = await prisma.client.findMany({
      where:{
        tenantId:{
          equals: tenantId
        }
      }
    })
    return res.send(clients)
    } else {
      res.send([])
    }
  }