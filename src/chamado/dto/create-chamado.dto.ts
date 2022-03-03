import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty } from 'class-validator';

export class CreateChamadoDto {
  man_id: number;
  @IsNotEmpty()
  @ApiProperty()
  man_title: string;

  @IsNotEmpty()
  @IsIn([0, 1, 2])
  @ApiProperty()
  man_nivel: number;

  @IsNotEmpty()
  @ApiProperty()
  man_status: string;

  @IsNotEmpty()
  @ApiProperty()
  man_requester: string;

  @IsNotEmpty()
  @ApiProperty()
  man_sector: string;

  man_attendant: string;

  @IsNotEmpty()
  @ApiProperty()
  man_name_operator: string;

  @IsNotEmpty()
  @ApiProperty()
  man_service_type: string;

  @IsNotEmpty()
  @ApiProperty()
  man_cod_machine: number;

  @IsNotEmpty()
  @ApiProperty()
  man_description: string;

  @IsNotEmpty()
  @ApiProperty()
  man_observation: string;

  @IsNotEmpty()
  @ApiProperty()
  man_group: string;

  @IsNotEmpty()
  @ApiProperty()
  man_date_opening: string;

  @IsNotEmpty()
  @ApiProperty()
  man_user_id: number;

  man_user_del: string;

  man_date_del: string;

  man_delete: string;
}
