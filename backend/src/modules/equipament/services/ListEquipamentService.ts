import Equipament from '../entities/Equipament';
import EquipamentRepository from '../repositories/EquipamentRepository';

export default class ListEquipamentsService {
  private equipamentsRepository: EquipamentRepository;

  constructor() {
    this.equipamentsRepository = new EquipamentRepository();
  }

  public async execute(): Promise<Equipament[]> {
    return this.equipamentsRepository.list();
  }
}
