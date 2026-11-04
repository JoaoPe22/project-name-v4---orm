import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateTurmaDto {
    @IsInt()
    @IsNotEmpty()
    ano: number;

    @IsInt()
    @IsNotEmpty()
    disciplinaId: number;
}

