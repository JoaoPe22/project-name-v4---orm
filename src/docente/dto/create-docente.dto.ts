import { IsInt, IsNotEmpty } from "class-validator";

export class CreateDocenteDto {
    @IsInt()
    @IsNotEmpty()
    nome: string;

    @IsInt()
    @IsNotEmpty()
    disciplinaId: number; 
}
