-- CreateTable
CREATE TABLE "Disciplina" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cargaHoraria" INTEGER NOT NULL,
    "semestre" INTEGER NOT NULL,
    "curso" TEXT NOT NULL
);
