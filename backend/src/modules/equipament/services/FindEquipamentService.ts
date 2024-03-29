import Equipament from '../entities/Equipament';
import EquipamentRepository from '../repositories/EquipamentRepository';

export default class FindEquipamentService {
  private equipamentsRepository: EquipamentRepository;

  constructor() {
    this.equipamentsRepository = new EquipamentRepository();
  }

  public async execute(id: number): Promise<Equipament | null> {
    return this.equipamentsRepository.findById(id);
  }
}
