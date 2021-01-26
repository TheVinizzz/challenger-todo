import React, {useContext, useEffect} from 'react'
import {Context} from "../../context";
import ViewTodo from "./components/ViewTodo";
import {ITodo} from "../../context/hooks/useTodo";
import {Button, makeStyles} from "@material-ui/core";
import {history} from "../../../App";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    componentTodo: {
        display: 'flex',
        flexDirection: 'column',
        width: 400
    }
}));

export default function Home(){
    const classes = useStyles();

    const {getTodos, ListAllTodos} = useContext(Context)

    useEffect(() => {
        ListAllTodos()
    },// eslint-disable-next-line
        [])

    const handlePushNewTodo = () => {
        history.push('/new')
    }

    return(
        <div className={classes.root}>
            <div className={classes.componentTodo}>
                <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: 10}}>
                    <Button
                        variant="contained"
                        onClick={handlePushNewTodo}
                        color="primary"
                        size="small"
                        style={{marginRight: 5}}
                    >
                        Adicionar novo
                    </Button>
                </div>
                {getTodos.map((todos: ITodo) => {
                    return(
                        <div key={todos.id}>
                            <ViewTodo todo={todos}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}