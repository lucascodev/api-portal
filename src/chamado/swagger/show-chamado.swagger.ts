import { OmitType, PartialType } from '@nestjs/swagger';
import { ChamadoEntity } from '../entity/chamado.entity';

export class ShowChamadoSwagger extends PartialType(
  OmitType(ChamadoEntity, []),
) {}
