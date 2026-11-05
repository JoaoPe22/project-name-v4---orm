import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class DisciplinasService {
  constructor(private prisma: PrismaService) { }

  create(disciplina: { nome: string; cargaHoraria: number; semestre: number; curso: string }) {
    return this.prisma.disciplina.create({ data: disciplina });
  }

  findAll() {
    return this.prisma.disciplina.findMany();
  }

  findOne(id: number) {
    return this.prisma.disciplina.findUnique({ where: { id } });
  }

  findBySemestre(semestre: number) {
    return this.prisma.disciplina.findMany({ where: { semestre } });
  }

  update(id: number, dados: any) {
    return this.prisma.disciplina.update({
      where: { id },
      data: dados,
    });
  }

  remove(id: number) {
    return this.prisma.disciplina.delete({ where: { id } });
  }
}

