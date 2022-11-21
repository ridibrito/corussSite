/*
  Warnings:

  - Added the required column `image` to the `Administradora` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Operadora` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Administradora" ADD COLUMN     "image" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "Operadora" ADD COLUMN     "image" VARCHAR(255) NOT NULL;
