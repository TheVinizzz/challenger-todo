import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('listtodo')
class Todo {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    status: boolean
}

export default Todo
