import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(req:NextApiRequest , res:NextApiResponse) {
    const { method } = req

    if(method === 'GET') {

       const coparticipacao = await prisma.coparticipacao.findMany()

       return res.status(200).json({
        data: coparticipacao,
    
    })
}

   return res.status(404).json({message: "Rota inexistente"})

}