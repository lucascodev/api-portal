import { OmitType, PartialType } from '@nestjs/swagger';
import { ChamadoEntity } from '../entity/chamado.entity';

export class UpdateChamadoSwagger extends PartialType(
  OmitType(ChamadoEntity, []),
) {}
