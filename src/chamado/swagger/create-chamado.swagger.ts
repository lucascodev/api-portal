import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateChamadoDto } from '../dto/create-chamado.dto';
import { ChamadoEntity } from '../entity/chamado.entity';

export class CreateChamadoSwagger extends PartialType(
  OmitType(CreateChamadoDto, []),
) {}
