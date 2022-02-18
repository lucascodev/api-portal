import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChamadoModule } from './chamado/chamado.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ChamadoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
