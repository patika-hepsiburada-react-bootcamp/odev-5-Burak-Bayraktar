import { FC, useEffect, useState } from 'react'
import ToDoItem from '../ToDoItem'
import TaskManagers from '../TaskManagers';
import { useToDo } from '../../../contexts/ToDoContext';
import { ITodo } from '../../../interfaces';
const ToDoList: FC = () => {
    const { toDoList, selectedItem } = useToDo();
    const [list, setList] = useState<ITodo[]>(toDoList);
    
    useEffect(() => {
        let filteredList;
        const newList = [...toDoList];
        switch (selectedItem.name) {
            case "All":
                setList(newList);
                break;
            case "Active":
                filteredList = newList.filter(item => !item.isCompleted)
                setList(filteredList)
                break;
            case "Completed":
                filteredList = newList.filter(item => item.isCompleted)
                setList(filteredList)
                break;
            default:
                break;
          } 
        
    }, [selectedItem, toDoList]);

    return (
        <>
            <div className="to-do-list">
                {
                    list.map(({text, isCompleted, id}) => {
                        return <ToDoItem key={id} id={id} isCompleted={isCompleted} text={text} />
                    })
                }
            </div>
            <TaskManagers />
        </>
    )
}

export default ToDoList
