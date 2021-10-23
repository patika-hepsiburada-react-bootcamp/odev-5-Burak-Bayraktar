import { FC } from 'react'
import { ITodo } from '../../../interfaces/ITodo'

const ToDoItem: FC<ITodo> = ({ id, text, isCompleted }) => {
    return (
        <div key={id} className="to-do-item">
            <input className="to-do-item-checkbox" type="checkbox" id={id} name={text} value={text} checked={isCompleted} />
            <span className="to-do-item-text">{ text }</span>
        </div>
    )
}

export default ToDoItem
