import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty } from 'class-validator';

export class CreateChamadoDto {
  MAN_ID: number;
  @IsNotEmpty()
  @ApiProperty()
  MAN_TITULO: string;

  @IsNotEmpty()
  @IsIn([0, 1, 2])
  @ApiProperty()
  MAN_NIVEL: number;

  @IsNotEmpty()
  @ApiProperty()
  MAN_STATUS: string;

  @IsNotEmpty()
  @ApiProperty()
  MAN_SOLICITANTE: string;

  @IsNotEmpty()
  @ApiProperty()
  MAN_SETOR: string;

  MAN_ATENDENTE: string;

  @IsNotEmpty()
  @ApiProperty()
  MAN_NOME_OPERADOR: string;

  @IsNotEmpty()
  @ApiProperty()
  MAN_TIPO_SERVICO: string;

  @IsNotEmpty()
  @ApiProperty()
  MAN_COD_MAQUINA: number;

  @IsNotEmpty()
  @ApiProperty()
  MAN_DESCRICAO: string;

  @IsNotEmpty()
  @ApiProperty()
  MAN_OBSERVACAO: string;

  @IsNotEmpty()
  @ApiProperty()
  MAN_GRUPO: string;

  @IsNotEmpty()
  @ApiProperty()
  MAN_DATA_ABERTURA: string;

  @IsNotEmpty()
  @ApiProperty()
  MAN_USER_ID: number;

  MAN_USER_DEL: string;

  MAN_DATA_DEL: string;

  MAN_DELETE: string;
}
