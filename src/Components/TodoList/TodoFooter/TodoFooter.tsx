import React, {useContext} from "react";
import {Context} from "../logic/context";
import {ITodo} from "../../../Interfaces/ITodo";
import {TaskFilter} from "./TaskFilter/TaskFilter";
import './TodoFooter.css'

function TodoFooter() {
    const { dispatch, list } = useContext<any>(Context)
    return (
        <footer>
            <span>{list.filter((todo: ITodo) => !todo.completed).length} items left</span>
            <div>
                <TaskFilter text="All" checked={true} />
                <TaskFilter text="Active" checked={false} />
                <TaskFilter text="Completed" checked={false} />
            </div>
            <button
                onClick = {() => dispatch({
                    type: 'clear-completed',
                })}
            >
                Clear completed
            </button>
        </footer>
    )
}

export default TodoFooter
