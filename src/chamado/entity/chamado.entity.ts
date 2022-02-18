import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'MAN_CAD_ORDEM_SERVICOS' })
export class ChamadoEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  MAN_ID: number;

  @Column('varchar2')
  @ApiProperty()
  MAN_TITULO: string;

  @Column('number')
  @ApiProperty()
  MAN_NIVEL: number;

  @Column('varchar2')
  @ApiProperty()
  MAN_STATUS: string;

  @Column('varchar2')
  @ApiProperty()
  MAN_SOLICITANTE: string;

  @Column('varchar2')
  @ApiProperty()
  MAN_SETOR: string;

  @Column('varchar2')
  @ApiProperty()
  MAN_ATENDENTE: string;

  @Column('varchar2')
  @ApiProperty()
  MAN_NOME_OPERADOR: string;

  @Column('varchar2')
  @ApiProperty()
  MAN_TIPO_SERVICO: string;

  @Column('number')
  @ApiProperty()
  MAN_COD_MAQUINA: number;

  @Column('varchar2')
  @ApiProperty()
  MAN_DESCRICAO: string;

  @Column('clob')
  @ApiProperty()
  MAN_OBSERVACAO: string;

  @Column('varchar2')
  @ApiProperty()
  MAN_GRUPO: string;

  @Column('timestamp')
  @ApiProperty()
  MAN_DATA_ABERTURA: string;

  @Column('number')
  @ApiProperty()
  MAN_USER_ID: number;

  @Column('varchar2')
  @ApiProperty()
  MAN_USER_DEL: string;

  @Column('date')
  @ApiProperty()
  MAN_DATA_DEL: string;

  @Column('varchar2')
  @ApiProperty()
  MAN_DELETE: string;
}
