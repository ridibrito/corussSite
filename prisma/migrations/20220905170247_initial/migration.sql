-- CreateTable
CREATE TABLE "Lead" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "telefone" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "tipoPlano" VARCHAR(255) NOT NULL,
    "operadora" VARCHAR(255) NOT NULL,
    "valor" INTEGER NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);
