import { ICreateEquipamentDTO } from './ICreateEquipamentDTO';

export type IUpdateEquipamentDTO = ICreateEquipamentDTO & {
  id: number;
};
