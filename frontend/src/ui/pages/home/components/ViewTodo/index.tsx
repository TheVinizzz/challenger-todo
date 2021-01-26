import React, {useContext, useEffect, useState} from "react";
import {ITodo} from "src/ui/context/hooks/useTodo"
import {Button, FormControlLabel, makeStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import Switch from '@material-ui/core/Switch';
import {Context} from "../../../../context";
import {history} from "../../../../../App";

interface IProps {
    todo: ITodo
}

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 400,
        minHeight: 50,
        backgroundColor: '#141414',
        color: '#ffff',
        borderRadius: 5,
        marginBottom: 10,
        textAlign: 'center'
    },
}));

export default function ViewTodo({todo}: IProps) {
    const [getStatus, setGetStatus] = useState<boolean>(false)
    const classes = useStyles();

    const {deleteTodo, updateTodo} = useContext(Context)

    useEffect(() => {
        setGetStatus(todo.status)
    },[])

    const handleDeleteTodo = () => {
        deleteTodo(todo.id)
    }

    const handleUpdateTodo = () => {
        history.push(`/${todo.id}`)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = {status: event.target.checked}
        updateTodo(todo.id, value)
        setGetStatus(event.target.checked);
    };

    return (
        <div>
            <div
                className={classes.root}
                style={getStatus ? {backgroundColor: '#4169E1'} : {backgroundColor: '#C4302B'}}
            >
                <h1 style={{fontSize: 20}}>
                    {todo.title}
                </h1>
                <p>{todo.description}</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <FormControlLabel
                    control={
                        <Switch
                            checked={getStatus}
                            onChange={handleChange}
                            name="checke"
                            color="primary"
                        />
                    }
                    label="Desativar"
                />
                </div>
                <div>
                    <Button
                        variant="contained"
                        onClick={handleUpdateTodo}
                        color="primary"
                        size="small"
                        disabled={!getStatus}
                        style={{marginRight: 5}}
                    >
                        Editar
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleDeleteTodo}
                        size="small"
                        startIcon={<DeleteIcon />}
                        disabled={!getStatus}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    )
}