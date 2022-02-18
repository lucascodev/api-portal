import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChamadoDto } from './dto/create-chamado.dto';
import { UpdateChamadoDto } from './dto/update-chamado.dto';
import { ChamadoEntity } from './entity/chamado.entity';

@Injectable()
export class ChamadoService {
  constructor(
    @InjectRepository(ChamadoEntity)
    private readonly chamadoRepository: Repository<ChamadoEntity>,
  ) {}

  async findAll() {
    return await this.chamadoRepository.find();
  }
  async findOneOrFail(id: number) {
    try {
      return await this.chamadoRepository.findOneOrFail(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  async create(data: CreateChamadoDto) {
    return await this.chamadoRepository.save(
      this.chamadoRepository.create(data),
    );
  }
  async update(id: number, data: UpdateChamadoDto) {
    const chamado = await this.findOneOrFail(id);

    this.chamadoRepository.merge(chamado, data);
    return await this.chamadoRepository.save(chamado);
  }
  async delete(id: number) {
    await this.findOneOrFail(id);

    await this.chamadoRepository.delete(id);
  }
}
