import { FC, useState } from 'react'
import ToDoItem from '../ToDoItem'
import { ITodo } from '../../../interfaces/ITodo'
import Footer from '../Footer';

const ToDoList: FC = () => {
    const [todoItem, setToDoItem] = useState<ITodo[]>([
        {id: "1", text: "Task1", isCompleted: false},
        {id: "2", text: "Task2", isCompleted: false},
        {id: "3", text: "Task3", isCompleted: true},
    ]);

    return (
        <>
            <div className="to-do-list">
                {
                    todoItem.map(({text, isCompleted, id}) => {
                        return <ToDoItem key={id} id={id} isCompleted={isCompleted} text={text} />
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default ToDoList
