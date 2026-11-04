import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TurmasService } from './turmas.service';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';

@Controller('turmas')
export class TurmasController {
  constructor(private readonly turmasService: TurmasService) {}

  @Post()
  create(@Body() createTurmaDto: CreateTurmaDto) {
    return this.turmasService.create(createTurmaDto);
  }

  @Get()
  findAll() {
    return this.turmasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turmasService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTurmaDto: UpdateTurmaDto) {
    return this.turmasService.update(Number(id), updateTurmaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turmasService.remove(Number(id));
  }
}
