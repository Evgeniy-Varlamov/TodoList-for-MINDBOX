import React, {ChangeEvent, useContext, useState} from "react";
import {Context} from "../../logic/context";
import './TaskInput.css'



export function TaskInput() {
    const { dispatch } = useContext<any>(Context)

    const [todoTitle, setTodoTitle] = useState<string>('');

    const addTodo = () => {
            dispatch({
                type: 'add',
                payload: {todoTitle: todoTitle, id: Date.now()}
            })
            setTodoTitle('')
    }


    return (
            <input type="text"
                   id="input"
                   placeholder="What needs to be done?"
                   value={todoTitle}
                   onChange={(event: ChangeEvent<HTMLInputElement>) => setTodoTitle(event.target.value)}
                   onKeyDown={(event: React.KeyboardEvent) => {
                       if ((event.key === 'Enter') && ((event.target as HTMLInputElement).value.trim())) {
                           addTodo()
                       }
                   }}
            />
    )
}
