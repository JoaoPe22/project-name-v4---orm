import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TurmasService {
  constructor(private prisma: PrismaService) { }

  create(data: { ano: number; disciplinaId: number }) {
    return this.prisma.turma.create({ data });
  }

  findAll() {
    return this.prisma.turma.findMany({
      include: { disciplina: true }, // já traz info da disciplina
    });
  }

  findOne(id: number) {
    return this.prisma.turma.findUnique({
      where: { id },
      include: { disciplina: true },
    });
  }

  update(id: number, data: { ano?: number; disciplinaId?: number }) {
    return this.prisma.turma.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.turma.delete({ where: { id } });
  }
}
