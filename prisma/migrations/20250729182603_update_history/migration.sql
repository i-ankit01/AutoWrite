/*
  Warnings:

  - Added the required column `templateSlug` to the `History` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "History" ADD COLUMN     "templateSlug" TEXT NOT NULL;
