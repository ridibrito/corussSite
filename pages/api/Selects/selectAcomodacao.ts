import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'




   const prisma = new PrismaClient()

  
  export default async function Acomodacao(req: NextApiRequest, res:NextApiResponse){
    const { method } = req

    if( method === 'GET'){

    const Acomodacao = await prisma.acomodacao.findMany()
    
    return res.status(200).json({
      data: Acomodacao
    })
    }
       return res.status(404).json({ message: 'Rota inexistente'})
  }