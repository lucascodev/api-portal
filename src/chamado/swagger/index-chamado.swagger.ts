import { OmitType, PartialType } from '@nestjs/swagger';
import { ChamadoEntity } from '../entity/chamado.entity';

export class IndexChamadoSwagger extends PartialType(
  OmitType(ChamadoEntity, ['MAN_USER_DEL', 'MAN_DATA_DEL', 'MAN_DELETE']),
) {}
