import {TaskInput} from "./TaskInput/TaskInput";
import React from "react";
import './TodoHeader.css'

function TodoHeader() {
    return (
        <header className="input-container">
            <h1>Todos</h1>
            <TaskInput></TaskInput>
        </header>
    )
}

export default TodoHeader
