import {useContext} from 'react'
import {ITodo} from "../../../../Interfaces/ITodo";
import {Context} from "../../logic/context"
import './TaskItem.css';

export function TaskItem(item: ITodo) {
    const { dispatch }  = useContext<any>(Context)

    const cls: string[] = ['todo']
    if (item.completed) cls.push('completed')
    return (
        <li className={cls.join(' ')} data-testid="todo-item">
            <label>
                <input
                    className = "checkbox hide"
                    type="checkbox"
                    defaultChecked={item.completed}
                    onChange={()=> dispatch({
                        type: 'toggle',
                        payload: item.id
                    })}
                />
                <span className="todo-text">{item.title}</span>
            </label>
            <i
               className={"remove"}
               onClick = {() => dispatch({
                   type: 'remove',
                   payload: item.id
               })}
            >
                &#10060;
            </i>
        </li>
    );
}
