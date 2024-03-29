import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateEquipamentService from '../services/CreateEquipamentService';
import DeleteEquipamentService from '../services/DeleteEquipamentService';
import FindEquipamentService from '../services/FindEquipamentService';
import ListEquipamentsService from '../services/ListEquipamentService';
import UpdateEquipamentService from '../services/UpdateEquipamentService';

export default class EquipamentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { address, status, entry_date, exit_date, receiver } = request.body;

    const equipament = await new CreateEquipamentService().execute({
      ...address,
      status,
      entry_date,
      exit_date,
      name_receiver: receiver.name,
      cpf_receiver: receiver.cpf,
      phone_receiver: receiver.phone,
    });

    return response.json(instanceToPlain(equipament));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { address, status, entry_date, exit_date, receiver } = request.body;

    const { id } = request.params;
    const idAsNumber = Number(id);

    const Equipament = await new UpdateEquipamentService().execute({
      ...address,
      id: idAsNumber,
      status,
      entry_date,
      exit_date,
      name_receiver: receiver.name,
      cpf_receiver: receiver.cpf,
      phone_receiver: receiver.phone,
      email_receiver: receiver.email,
    });

    return response.json(instanceToPlain(Equipament));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const idAsNumber = Number(id);

    await new DeleteEquipamentService().execute(idAsNumber);
    return response.json({ id: idAsNumber });
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const equipaments = await new ListEquipamentsService().execute();

    return response.json(instanceToPlain(equipaments));
  }

  public async findById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const idAsNumber = Number(id);

    const equipament = await new FindEquipamentService().execute(idAsNumber);

    return response.json(instanceToPlain(equipament));
  }
}
