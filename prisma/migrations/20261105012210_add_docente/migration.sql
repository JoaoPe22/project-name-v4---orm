-- CreateTable
CREATE TABLE "Docente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "disciplinaId" INTEGER NOT NULL,
    CONSTRAINT "Docente_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
