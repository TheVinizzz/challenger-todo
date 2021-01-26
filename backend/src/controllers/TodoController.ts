import {Request, Response} from 'express'
import {getCustomRepository, getRepository} from "typeorm";
import Todo from "../models/Todo";
import TodoRepository from "../repositories/TodoRepository";

class TodoController {

   async newTodo(req: Request, res: Response) {
        try {
            const repository = getRepository(Todo)
            const {title, description} = req.body
            const todo = repository.create({title, description})
            await repository.save(todo)
            return res.json(todo)
        }
        catch(err) {
            res.send(err.message)
        }
   }

   async getAllTodos(req: Request, res: Response) {
       res.json(await getRepository(Todo).find());
   }

   async getOneTodo(req: Request, res: Response) {
       const repository = getCustomRepository(TodoRepository);
       const response = await repository.findByName(req.params.id);
       return res.json(response)
   }

   async deleteTodo(req: Request, res: Response) {
       const repository = getCustomRepository(TodoRepository);
       await repository.delete(req.params.id);
       return res.sendStatus(204)
   }

   async updateTodo(req: Request, res: Response) {
    const todo = await getRepository(Todo).findOne(req.params.id)
       if(todo) {
           getRepository(Todo).merge(todo, req.body)
           const results = await getRepository(Todo).save(todo)
           return res.json(results)
       }

       return res.status(404).json
   }
}

export default new TodoController()