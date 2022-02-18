import { Module } from '@nestjs/common';
import { ChamadoService } from './chamado.service';
import { ChamadoController } from './chamado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChamadoEntity } from './entity/chamado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChamadoEntity])],
  providers: [ChamadoService],
  controllers: [ChamadoController],
  exports: [ChamadoService],
})
export class ChamadoModule {}
