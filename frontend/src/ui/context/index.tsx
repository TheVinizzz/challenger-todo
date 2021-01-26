import React, {createContext} from 'react'
import useTodo, {ITodo} from "./hooks/useTodo";

export type ContextType = {
    ListAllTodos: any
    NewTodo: any
    deleteTodo: any
    getOneTodo: any
    onlyTodo: ITodo | any
    getTodos: ITodo[] | any
    updateTodo: any
}

const Context = createContext<ContextType>({
    ListAllTodos: null,
    NewTodo: null,
    getTodos: null,
    deleteTodo: null,
    getOneTodo: null,
    onlyTodo: null,
    updateTodo: null
})

function ContextApi({ children }: any) {

    const {ListAllTodos, getTodos, NewTodo, deleteTodo, getOneTodo, onlyTodo, updateTodo} = useTodo()

    return (
        <Context.Provider value={
            {
                ListAllTodos,
                NewTodo,
                deleteTodo,
                onlyTodo,
                getTodos,
                getOneTodo,
                updateTodo
            }
        }
        >
            {children}
        </Context.Provider>
    )
}

export {Context, ContextApi}

