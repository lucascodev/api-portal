import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { NotFoundSwagger } from 'src/helpers/swagger/not-found.swagger';
import { ChamadoService } from './chamado.service';
import { CreateChamadoDto } from './dto/create-chamado.dto';
import { UpdateChamadoDto } from './dto/update-chamado.dto';
import { ChamadoEntity } from './entity/chamado.entity';
import { CreateChamadoSwagger } from './swagger/create-chamado.swagger';
import { IndexChamadoSwagger } from './swagger/index-chamado.swagger';
import { ShowChamadoSwagger } from './swagger/show-chamado.swagger';
import { UpdateChamadoSwagger } from './swagger/update-chamado.swagger';

@Controller('api/chamado')
@ApiTags('Chamados')
export class ChamadoController {
  constructor(private readonly chamadoService: ChamadoService) {}
  @Get()
  @ApiOperation({ summary: 'Listar todos os itens da tabela! ' })
  @ApiResponse({
    status: 200,
    description: 'itens listados com sucesso!',
    type: IndexChamadoSwagger,
    isArray: true,
  })
  @ApiResponse({
    status: 400,
    description: 'item invalido!',
  })
  @ApiResponse({
    status: 500,
    description: 'Não foi possivel encontrar os itens na tabela!',
  })
  async index(): Promise<ChamadoEntity[]> {
    return await this.chamadoService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo item na tabela! ' })
  @ApiResponse({
    status: 200,
    description: 'Item cadastrado com sucesso!',
    type: CreateChamadoSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'item invalido!',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Não foi possivel cadastrar o item na tabela!',
  })
  async create(@Body() body: CreateChamadoDto) {
    return await this.chamadoService.create(body);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lista um itens passando o ID ' })
  @ApiResponse({
    status: 200,
    description: 'Item listado com sucesso!',
    type: ShowChamadoSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'item não encontrado!',
    type: NotFoundSwagger,
  })
  async show(@Param('id', new ParseIntPipe()) id: number) {
    return await this.chamadoService.findOneOrFail(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um item passando o ID ' })
  @ApiResponse({
    status: 200,
    description: 'Item atualizado com sucesso!',
    type: UpdateChamadoSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'item inválido!',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'item não foi encontrado!',
    type: NotFoundSwagger,
  })
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() body: UpdateChamadoDto,
  ) {
    return await this.chamadoService.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta um item passando o ID ' })
  @ApiResponse({
    status: 204,
    description: 'Item deletado com sucesso!',
  })
  @ApiResponse({
    status: 404,
    description: 'item não encontrado!',
    type: NotFoundSwagger,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', new ParseIntPipe()) id: number) {
    await this.chamadoService.delete(id);
  }
}
