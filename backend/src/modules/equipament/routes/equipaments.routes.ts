import { Router } from 'express';

import ensureAuthenticated from '../../users/middlewares/ensureAuthenticated';
import EquipamentController from '../controllers/EquipamentController';

const equipamentsRouter = Router();

const equipamentController = new EquipamentController();

equipamentsRouter.use(ensureAuthenticated);

equipamentsRouter.post('/', equipamentController.create);
equipamentsRouter.put('/:id', equipamentController.update);
equipamentsRouter.delete('/:id', equipamentController.delete);
equipamentsRouter.get('/:id', equipamentController.findById);
equipamentsRouter.get('/', equipamentController.index);
// EquipamentsRouter.get('/:deliverymanId', EquipamentController.listByDeliveryman);

export default equipamentsRouter;
