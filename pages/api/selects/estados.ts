import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(req:NextApiRequest , res:NextApiResponse) {
    const { method } = req

    if(method === 'GET') {

       const estados = await prisma.estados.findMany()

       return res.status(200).json({
        data: estados,
    
    })
}else if(method === 'POST') {

  const { name } = req.body

  const estados = await prisma.estados.create({
    data: {
        name,
    }
  })
  return res.status(201).json({
    data: estados,
  })


}

   return res.status(404).json({message: "Rota inexistente"})

}