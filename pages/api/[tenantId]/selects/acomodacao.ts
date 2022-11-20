import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(req:NextApiRequest , res:NextApiResponse) {
    const { method } = req

    if(method === 'GET') {

       const acomodacao = await prisma.acomodacao.findMany()

       return res.status(200).json({
        data: acomodacao,
    
    })
}else if(method === 'POST') {
    const { name } =req.body

    const acomodacao = await prisma.acomodacao.create({ 
        data:{
            name,
        }
       
        })
        return res.status(201).json({
            data: acomodacao,
    })

   return res.status(404).json({message: "Rota inexistente"})

}}