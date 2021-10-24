import { ChangeEvent, FC, KeyboardEvent } from 'react'
import { useToDo } from '../../../contexts/ToDoContext'
import { ITodo } from '../../../interfaces'

const ToDoItem: FC<ITodo> = ({ id, text, isCompleted }) => {
    const { toDoList, setToDoList, handleSetItemsValue  } = useToDo();

    const toggleCompletedState = (event: ChangeEvent<HTMLInputElement>) => {
        const item = toDoList.find((item) => item.id === event.target.id);
        const itemIndex = toDoList.findIndex((item) => item.id === event.target.id);
        const newList = [...toDoList];
        newList[itemIndex] = {...item!, isCompleted: item?.isCompleted ? false: true};

        handleSetItemsValue(newList)
        setToDoList(newList);
    }

    const handleDelete = (toDoItemId:string) => {
        const newList = [...toDoList]
        const id = newList.findIndex(item => item.id === toDoItemId)
        newList.splice(id, 1);

        handleSetItemsValue(newList)
        setToDoList(newList)
    }
    
    const changeTaskText = (event: KeyboardEvent<HTMLInputElement>, toDoItemId:string) => {
        if(event.key === "Enter") {
            // to prevent new-line behaviour
            event.preventDefault()

            const id = toDoList.findIndex(item => item.id === toDoItemId)
            if(event.currentTarget.textContent === toDoList[id].text) {
                return
            }

            toDoList[id].text = String(event.currentTarget.textContent)
        }
    }

    return (
        <div className="to-do-item">
            <input onChange={(event) => toggleCompletedState(event)} className="to-do-item-checkbox" type="checkbox" id={id} name={text} value={text} checked={isCompleted} />
            <span 
                suppressContentEditableWarning={isCompleted ? false :true} 
                contentEditable={isCompleted ? false : true}
                spellCheck={false} 
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => changeTaskText(e, id)} 
                className={`${isCompleted ? 'disable':''}  to-do-item-text`}
            >
                { text }
            </span>
            <button className="to-do-item-delete" onClick={() => handleDelete(id)}>X</button>
        </div>
    )
}

export default ToDoItem
