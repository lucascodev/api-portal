import { OmitType, PartialType } from '@nestjs/swagger';
import { ChamadoEntity } from '../entity/chamado.entity';

export class IndexChamadoSwagger extends PartialType(
  OmitType(ChamadoEntity, ['man_user_del', 'man_date_del', 'man_delete']),
) {}
