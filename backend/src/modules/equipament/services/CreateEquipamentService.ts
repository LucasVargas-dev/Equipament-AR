import { ICreateEquipamentDTO } from '../dtos/ICreateEquipamentDTO';
import Equipament from '../entities/Equipament';
import EquipamentRepository from '../repositories/EquipamentRepository';

export default class CreateEquipamentService {
  private equipamentRepository: EquipamentRepository;

  constructor() {
    this.equipamentRepository = new EquipamentRepository();
  }

  public async execute(
    equipamentToCreate: ICreateEquipamentDTO,
  ): Promise<Equipament> {
    return this.equipamentRepository.create(equipamentToCreate);
  }
}
