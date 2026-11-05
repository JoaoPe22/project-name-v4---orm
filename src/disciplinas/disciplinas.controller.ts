import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UsePipes } from '@nestjs/common';
import { DisciplinasService } from './disciplinas.service';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { LoggingInterceptor } from 'src/common/logging.interceptor';

@Controller('disciplinas')
export class DisciplinasController {
  constructor(private readonly disciplinasService: DisciplinasService) { }

  @UsePipes()
  @Post()
  create(@Body() createDisciplinaDto: CreateDisciplinaDto) {
    return this.disciplinasService.create(createDisciplinaDto);
  }

  @UseInterceptors(LoggingInterceptor)
  @Get()
  findAll() {
    return this.disciplinasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.disciplinasService.findOne(id);
  }

  @Get('semestre/:semestre')
  findBySemestre(@Param('semestre', ParseIntPipe) semestre: number) {
    return this.disciplinasService.findBySemestre(semestre);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDisciplinaDto: UpdateDisciplinaDto) {
    return this.disciplinasService.update(+id, updateDisciplinaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.disciplinasService.remove(+id);
  }
}
