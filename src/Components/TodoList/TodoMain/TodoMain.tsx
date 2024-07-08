import React, {useContext} from "react";
import {TaskList} from "./TaskList/TaskList";
import {Context} from "../logic/context";
import './TodoMain.css'

function TodoMain() {
    const { todosFilter } = useContext<any>(Context)
    return (
        <main>
            <TaskList {...todosFilter} />
        </main>
    )
}

export default TodoMain
