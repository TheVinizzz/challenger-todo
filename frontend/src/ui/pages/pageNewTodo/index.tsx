import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import {Context} from "../../context";
import {Button, makeStyles, Paper, TextField} from "@material-ui/core";
import {history} from "../../../App";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        height: '100vh'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 600
    },
    divid: {
        marginBottom: 5
    }
}));

export default function PageNewTodo(){
    const [titleValue, setTitleValue] = useState<string>()
    const [descriptionValue, setDescriptionValue] = useState<string>()
    const classes = useStyles();

    const { id } = useParams<{ id: string }>();

    const {NewTodo, onlyTodo, getOneTodo, updateTodo} = useContext(Context)

    useEffect(() => {
        if(id !== 'new') {
            onlyTodo(id)
        }
    },[])

    const handleNewTodo = () => {
        const structure = {title: titleValue, description: descriptionValue, status: true}
        if(id === 'new') {
            NewTodo(structure)
            return history.push('/')
        }
        else {
            updateTodo(id, structure)
            return history.push('/')
        }
    }

    if(id !== 'new' && !getOneTodo) return <div>Loading...</div>

    return(
        <div className={classes.root}>
            <div style={{alignSelf: 'center'}}>
                <Paper elevation={3} className={classes.container}>
                    <TextField
                        label="Titulo"
                        variant="outlined"
                        size="small"
                        defaultValue={id === 'new' ? '' : getOneTodo[0].title}
                        className={classes.divid}
                        onChange={(e) => setTitleValue(e.target.value)}
                    />
                    <TextField
                        label="Descrição"
                        variant="outlined"
                        size="small"
                        defaultValue={id === 'new' ? '' : getOneTodo[0].description}
                        className={classes.divid}
                        onChange={(e) => setDescriptionValue(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNewTodo}
                    >
                        Salvar
                    </Button>
                </Paper>
            </div>
        </div>
    )
}