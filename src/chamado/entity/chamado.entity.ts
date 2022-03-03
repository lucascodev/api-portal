import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'MAN_CAD_ORDEM_SERVICOS' })
export class ChamadoEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  man_id: number;

  @Column('varchar')
  @ApiProperty()
  man_title: string;

  @Column('numeric')
  @ApiProperty()
  man_nivel: number;

  @Column('varchar')
  @ApiProperty()
  man_status: string;

  @Column('varchar')
  @ApiProperty()
  man_requester: string;

  @Column('varchar')
  @ApiProperty()
  man_sector: string;

  @Column('varchar')
  @ApiProperty()
  man_attendat: string;

  @Column('varchar')
  @ApiProperty()
  man_name_operator: string;

  @Column('varchar')
  @ApiProperty()
  man_service_type: string;

  @Column('numeric')
  @ApiProperty()
  man_cod_machine: number;

  @Column('varchar')
  @ApiProperty()
  man_description: string;

  @Column('text')
  @ApiProperty()
  man_observation: string;

  @Column('varchar')
  @ApiProperty()
  man_group: string;

  @Column('timestamp')
  @ApiProperty()
  man_date_opening: string;

  @Column('numeric')
  @ApiProperty()
  man_user_id: number;

  @Column('varchar')
  @ApiProperty()
  man_user_del: string;

  @Column('date')
  @ApiProperty()
  man_date_del: string;

  @Column('varchar')
  @ApiProperty()
  man_delete: string;
}
