
import {TaskItem} from "../TaskItem/TaskItem"
import {ITodo} from "../../../../Interfaces/ITodo";
import "./TaskList.css";
import {Context} from "../../logic/context";
import {useContext} from "react";

export function TaskList(todos: ITodo[]) {
    const { todosFilter } = useContext<any>(Context)
    return (
        <ul className="todo-list">
            {todosFilter.map((item: ITodo) => <TaskItem key={item.id} {...item} />)}
        </ul>
    )
}
