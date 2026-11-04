import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { CreateDisciplinaDto } from 'src/disciplinas/dto/create-disciplina.dto';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: CreateDisciplinaDto): CreateDisciplinaDto {
    if (!value.nome || value.nome !== '') {
      throw new BadRequestException(`O nome da disciplina não pode ser vazio!`);
    }
    return value;
  }
}
