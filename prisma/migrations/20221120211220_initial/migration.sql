-- CreateTable
CREATE TABLE "Account" (
    "id" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "type" STRING NOT NULL,
    "provider" STRING NOT NULL,
    "providerAccountId" STRING NOT NULL,
    "refresh_token" STRING,
    "access_token" STRING,
    "expires_at" INT4,
    "token_type" STRING,
    "scope" STRING,
    "id_token" STRING,
    "session_state" STRING,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" STRING NOT NULL,
    "sessionToken" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL,
    "name" STRING,
    "email" STRING,
    "emailVerified" TIMESTAMP(3),
    "image" STRING,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" STRING NOT NULL,
    "token" STRING NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Tenant" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "slug" STRING NOT NULL,
    "plan" STRING NOT NULL,
    "image" STRING NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserOnTenants" (
    "userId" STRING NOT NULL,
    "tenantId" STRING NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" STRING NOT NULL,

    CONSTRAINT "UserOnTenants_pkey" PRIMARY KEY ("userId","tenantId")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "cpf" STRING NOT NULL,
    "telefone" STRING NOT NULL,
    "email" STRING NOT NULL,
    "dataNascimento" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sexo" STRING NOT NULL,
    "Nproposta" INT4 NOT NULL,
    "dataVenda" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataVigencia" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor" INT4 NOT NULL,
    "tipoPlano" STRING NOT NULL,
    "administradora" STRING NOT NULL,
    "operadora" STRING NOT NULL,
    "qtsVidas" INT4 NOT NULL,
    "comissao" STRING NOT NULL,
    "taxaAdesao" STRING NOT NULL,
    "valorTaxa" INT4 NOT NULL,
    "bonificacao" STRING NOT NULL,
    "valorBonificacao" INT4 NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tenantId" STRING NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lead" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "telefone" STRING NOT NULL,
    "email" STRING NOT NULL,
    "tipoPlano" STRING NOT NULL,
    "operadora" STRING NOT NULL,
    "administradora" STRING NOT NULL,
    "valor" INT4 NOT NULL,
    "tenantId" STRING NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Administradora" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,

    CONSTRAINT "Administradora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operadora" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,

    CONSTRAINT "Operadora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoPlano" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,

    CONSTRAINT "TipoPlano_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estados" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,

    CONSTRAINT "Estados_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnTenants" ADD CONSTRAINT "UserOnTenants_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnTenants" ADD CONSTRAINT "UserOnTenants_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
