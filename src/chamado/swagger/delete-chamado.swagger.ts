import { OmitType, PartialType } from '@nestjs/swagger';
import { ChamadoEntity } from '../entity/chamado.entity';

export class DeleteChamadoSwagger extends PartialType(
  OmitType(ChamadoEntity, []),
) {}
