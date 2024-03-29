import EquipamentRepository from '../repositories/EquipamentRepository';

export default class DeleteEquipamentService {
  private equipamentRepository: EquipamentRepository;

  constructor() {
    this.equipamentRepository = new EquipamentRepository();
  }

  public async execute(id: number): Promise<void> {
    await this.equipamentRepository.delete(id);
  }
}
