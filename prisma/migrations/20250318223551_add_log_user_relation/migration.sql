/*
  Warnings:

  - You are about to drop the `DrankToday` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EatenToday` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Toiletry` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DrankToday" DROP CONSTRAINT "DrankToday_logId_fkey";

-- DropForeignKey
ALTER TABLE "EatenToday" DROP CONSTRAINT "EatenToday_logId_fkey";

-- DropForeignKey
ALTER TABLE "Toiletry" DROP CONSTRAINT "Toiletry_logId_fkey";

-- AlterTable
ALTER TABLE "Log" ADD COLUMN     "drankToday" JSONB,
ADD COLUMN     "eatenToday" JSONB,
ADD COLUMN     "toiletriesUsed" JSONB,
ALTER COLUMN "title" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "DrankToday";

-- DropTable
DROP TABLE "EatenToday";

-- DropTable
DROP TABLE "Toiletry";
