/*
  Warnings:

  - Added the required column `administradora` to the `Lead` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "administradora" VARCHAR(255) NOT NULL;
