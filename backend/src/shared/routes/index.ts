import { Router } from 'express';

import equipamentsRouter from '../../modules/equipament/routes/equipaments.routes';
import userRoutes from '../../modules/users/routes/user.routes';
import sessionsRouter from '../../modules/users/routes/sessions.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/sessions', sessionsRouter);

routes.use('/equipament', equipamentsRouter);

export default routes;
