import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(req:NextApiRequest , res:NextApiResponse) {
    const { method } = req

    if(method === 'GET') {

       const entidade = await prisma.entidade.findMany()

       return res.status(200).json({
        data: entidade,
    
    })
}else if(method === 'POST') {

  const { name } = req.body

  const entidade = await prisma.entidade.create({
    data: {
        name,
    }
  })
  return res.status(201).json({
    data: entidade,
  })


}

   return res.status(404).json({message: "Rota inexistente"})

}