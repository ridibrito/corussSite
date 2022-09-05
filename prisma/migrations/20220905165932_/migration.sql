-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "cpf" VARCHAR(255) NOT NULL,
    "telefone" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "dataNascimento" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sexo" TEXT NOT NULL,
    "Nproposta" INTEGER NOT NULL,
    "dataVenda" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataVigencia" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor" INTEGER NOT NULL,
    "tipoPlano" VARCHAR(255) NOT NULL,
    "administradora" VARCHAR(255) NOT NULL,
    "operadora" VARCHAR(255) NOT NULL,
    "qtsVidas" INTEGER NOT NULL,
    "comissao" VARCHAR(255) NOT NULL,
    "taxaAdesao" VARCHAR(255) NOT NULL,
    "valorTaxa" INTEGER NOT NULL,
    "bonificacao" VARCHAR(255) NOT NULL,
    "valorBonificacao" INTEGER NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);
