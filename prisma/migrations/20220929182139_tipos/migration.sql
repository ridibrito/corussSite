/*
  Warnings:

  - The primary key for the `Abrangencia` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Acomodacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Coparticipacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Reembolso` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TipoPlano` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Abrangencia" DROP CONSTRAINT "Abrangencia_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Abrangencia_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Abrangencia_id_seq";

-- AlterTable
ALTER TABLE "Acomodacao" DROP CONSTRAINT "Acomodacao_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Acomodacao_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Acomodacao_id_seq";

-- AlterTable
ALTER TABLE "Coparticipacao" DROP CONSTRAINT "Coparticipacao_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Coparticipacao_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Coparticipacao_id_seq";

-- AlterTable
ALTER TABLE "Reembolso" DROP CONSTRAINT "Reembolso_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Reembolso_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Reembolso_id_seq";

-- AlterTable
ALTER TABLE "TipoPlano" DROP CONSTRAINT "TipoPlano_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "TipoPlano_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "TipoPlano_id_seq";
