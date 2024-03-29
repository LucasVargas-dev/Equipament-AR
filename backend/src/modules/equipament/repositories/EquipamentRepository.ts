import { In, Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import Equipament from '../entities/Equipament';
import { ICreateEquipamentDTO } from '../dtos/ICreateEquipamentDTO';
import { IUpdateEquipamentDTO } from '../dtos/IUpdateEquipamentDTO';

export default class EquipamentRepository {
  private ormRepository: Repository<Equipament>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Equipament);
  }

  public async create(
    EquipamentData: ICreateEquipamentDTO,
  ): Promise<Equipament> {
    const equipament = this.ormRepository.create(EquipamentData);
    await this.ormRepository.save(equipament);

    return equipament;
  }

  public async update(
    EquipamentData: IUpdateEquipamentDTO,
  ): Promise<Equipament> {
    const equipament = this.ormRepository.create(EquipamentData);
    await this.ormRepository.save(equipament);

    return equipament;
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async listByIds(ids: number[]): Promise<Equipament[]> {
    return this.ormRepository.find({ where: { id: In(ids) } });
  }

  public async list(): Promise<Equipament[]> {
    return this.ormRepository.find({ Equipament: { id: 'ASC' } });
  }

  public async findById(id: number): Promise<Equipament | null> {
    return this.ormRepository.findOne({ where: { id } });
  }
}
