import { Request, Response, Router } from 'express';
import IpcasController from '../controllers/IpcasController';

const routes = Router();

routes.get('/', IpcasController.index);

routes.post('/import', IpcasController.import);

export default routes;