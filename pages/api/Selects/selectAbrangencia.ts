import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'




   const prisma = new PrismaClient()

  
  export default async function Abrangencia (req: NextApiRequest, res:NextApiResponse){
    const { method } = req

    if( method === 'GET'){

    const Abrangencia = await prisma.abrangencia.findMany()
    
    return res.status(200).json({
      data: Abrangencia
    })
    }
       return res.status(404).json({ message: 'Rota inexistente'})
  }