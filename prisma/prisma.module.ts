import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // opcional para deixar disponível em todo o app
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
