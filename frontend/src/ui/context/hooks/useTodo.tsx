import api from 'src/Api'
import {useState} from "react";

export interface ITodo {
    id: string
    title: string
    description: string
    status: boolean
}

export default function useTodo() {
    const [getTodos, setGetTodos] = useState<ITodo[] | []>([])
    const [getOneTodo, setGetOneTodo] = useState<ITodo| null>(null)

    async function ListAllTodos(): Promise<void>{
        const response = await api.get('/list-todo')
        setGetTodos(response.data)
    }

    async function NewTodo(values: ITodo): Promise<void>{
        await api.post('/list-todo', values)
        setGetTodos( [values, ...getTodos])
    }

    async function onlyTodo(values: string): Promise<void>{
        const response = await api.get(`/list-todo/${values}`)
        setGetOneTodo(response.data)
    }

    async function deleteTodo(value: string): Promise<void>{
        await api.delete(`/list-todo/${value}`)
        setGetTodos(getTodos.filter((item: any) => item.id !== value))
    }

    async function updateTodo(idTodo: string, value: ITodo): Promise<void>{
        const response = await api.put(`/list-todo/${idTodo}`, value)
        setGetTodos((old: ITodo[]) => old.map((item: ITodo) => item.id === idTodo ? response.data : item))
    }

    return {ListAllTodos, NewTodo, deleteTodo, updateTodo, onlyTodo, getTodos, getOneTodo}
}
