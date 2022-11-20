import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(req:NextApiRequest , res:NextApiResponse) {
    const { method } = req

    if(method === 'GET') {

       const tipoPlano = await prisma.tipoPlano.findMany()

       return res.status(200).json({
        data: tipoPlano,
    
    })
}

   return res.status(404).json({message: "Rota inexistente"})

}