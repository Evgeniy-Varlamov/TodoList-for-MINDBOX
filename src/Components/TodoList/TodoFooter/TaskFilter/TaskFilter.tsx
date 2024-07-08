import {useContext} from "react";
import {Context} from "../../logic/context";
import './TaskFilter.css'

type TProps = {
    text: string,
    checked: boolean
}

export function TaskFilter (filter: TProps) {
    const { selectFilter } = useContext<any>(Context)
    return (
        <label className='filter'>
            <input type="radio"
                   className="filter-check hide"
                   name='filter'
                   defaultChecked={filter.checked}
                   onChange={()=>{selectFilter(filter.text)}}
            />
            <span className='filter-text'>{filter.text}</span>
        </label>
    )
}
