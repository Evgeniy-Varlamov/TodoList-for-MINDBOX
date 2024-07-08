import React, {useEffect, useReducer, useState} from "react";
import reducer from "./logic/reducer";
import {TFilter} from "../../Interfaces/TFilter";
import {ITodo} from "../../Interfaces/ITodo";
import {Context} from "./logic/context";
import TodoHeader from "./TodoHeader/TodoHeader";
import TodoMain from "./TodoMain/TodoMain";
import './TodoList.css'
import TodoFooter from "./TodoFooter/TodoFooter";

function TodoList() {
    // Список со всеми задачами
    const [list, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos') || '[]'));
    // Значение фильтра
    const [filter, setFilter] = useState<TFilter>('All');
    // Отфильтрованный список задач
    const [todosFilter, setTodoFilter] = useState<ITodo[]>([])

    /**
     * Функция фильтрования задача
     * @param key - ключ фильтрации
     * @param todos - список задач который нужно отфильтровать
     */
    const filtered = (key: TFilter, todos: ITodo[]) => {
        return todos.filter((todo:ITodo) => {
            if (key === 'All') return true
            if (key === 'Completed' && todo.completed) return true
            if (key === 'Active' && !todo.completed) return true
            return false
        })
    }

    const selectFilter = (value: TFilter) => {
        setFilter(value)
    }

    // Фильтруем список если он изменился или если изменилось значение фильтра
    useEffect(() => {
        setTodoFilter(filtered(filter, list))
    }, [filter, list])

    // Сохраняем в storage новый список если добавилась, изменилась или удалилась задача
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(list))
    }, [list]);

    return (
        <Context.Provider value={{dispatch, selectFilter, todosFilter, list}}>
            <div className="container">
                <TodoHeader />
                <TodoMain />
                <TodoFooter />
            </div>
        </Context.Provider>
    );
}

export default TodoList
