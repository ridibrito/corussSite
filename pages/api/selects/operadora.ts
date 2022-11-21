import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

interface IOperadora {
  name: string
  image: string
}

const prisma = new PrismaClient()

export default async function handler(req:NextApiRequest , res:NextApiResponse) {
    const { method } = req

    if(method === 'GET') {

       const operadora = await prisma.operadora.findMany()

       return res.status(200).json({
        data: operadora,
    
    })
}else if(method === 'POST') {

  const { name, image } = req.body

  const operadora:IOperadora = await prisma.operadora.create({
    data: {
        name,
        image,
    }
  })
  return res.status(201).json({
    data: operadora,
  })


}

   return res.status(404).json({message: "Rota inexistente"})

}