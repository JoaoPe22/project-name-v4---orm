import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DocenteService {
  constructor(private prisma: PrismaService) { }
  
  create(data: {nome: string; disciplinaId: number}) {
    return this.prisma.docente.create({ data });
  }

  findAll() {
    return this.prisma.docente.findMany({
      include: { disciplina: true }, // já traz info da disciplina
    });
  }

  findOne(id: number) {
    return this.prisma.docente.findUnique({
      where: { id },
      include: { disciplina: true },
    });
  }

  update(id: number, data:{ ano?: number; disciplinaId?: number }) {
    return this.prisma.docente.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.docente.delete({
      where: { id },
    });
  }
}
