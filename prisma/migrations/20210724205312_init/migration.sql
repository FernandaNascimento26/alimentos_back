-- CreateTable
CREATE TABLE "Alimento" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "ingredientes" TEXT[],

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Alimento.nome_unique" ON "Alimento"("nome");
