import { Router } from 'express';
import todoRouter from './todo.routes';

const routes = Router();

routes.use('/list-todo', todoRouter);

export default routes;
