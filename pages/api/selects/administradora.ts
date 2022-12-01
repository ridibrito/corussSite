import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

interface IAdministradora {
  name: string;
  image: string;
}

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method === "GET") {
    const administradora = await prisma.administradora.findMany();

    return res.status(200).json({
      data: administradora,
    });
  } else if (method === "POST") {
    const { name, image } = req.body;

    const administradora: IAdministradora = await prisma.administradora.create({
      data: {
        name,
        image,
      },
    });
    return res.status(201).json({
      data: administradora,
    });
  }

  return res.status(404).json({ message: "Rota inexistente" });
}
