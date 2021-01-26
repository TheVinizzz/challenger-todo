import {Router} from 'express'
import TodoController from "../controllers/TodoController";

const todoRouter = Router()

todoRouter.get('/', TodoController.getAllTodos);
todoRouter.get('/:id', TodoController.getOneTodo);
todoRouter.post('/', TodoController.newTodo);
todoRouter.put('/:id', TodoController.updateTodo);
todoRouter.delete('/:id', TodoController.deleteTodo);

export default todoRouter
