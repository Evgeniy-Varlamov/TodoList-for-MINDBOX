import {ITodo} from "../../../Interfaces/ITodo";

type TAction = {
    type: string,
    payload?: any
}


export default function(list: ITodo[], action: TAction) {
    switch (action.type) {
        case 'add':
            list = [
                ...list,
                {
                    id: action.payload.id,
                    title: action.payload.todoTitle,
                    completed: false
                }
            ]
            return list
        case 'toggle':
            return list.map((todo: ITodo) => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        case 'remove':
            return list.filter((todo: ITodo) => todo.id !== action.payload)
        case 'clear-completed':
            return list.filter((todo: ITodo) => !todo.completed)
        default:
            return list
    }
}
