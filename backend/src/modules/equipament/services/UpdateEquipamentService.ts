import { IUpdateEquipamentDTO } from '../dtos/IUpdateEquipamentDTO';
import Equipament from '../entities/Equipament';
import EquipamentRepository from '../repositories/EquipamentRepository';

export default class UpdateEquipamentService {
  private equipamentRepository: EquipamentRepository;

  constructor() {
    this.equipamentRepository = new EquipamentRepository();
  }

  public async execute(
    equipamentToUpdate: IUpdateEquipamentDTO,
  ): Promise<Equipament> {
    return this.equipamentRepository.update(equipamentToUpdate);
  }
}
