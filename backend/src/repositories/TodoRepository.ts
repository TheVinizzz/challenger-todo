import { EntityRepository, Repository } from 'typeorm';
import Todo from '../models/Todo';

@EntityRepository(Todo)
export default class TodoRepository extends Repository<Todo> {
  public async findByName(id: string): Promise<Todo[]> {
    return this.find({
      where: {
        id,
      },
    });
  }
}
