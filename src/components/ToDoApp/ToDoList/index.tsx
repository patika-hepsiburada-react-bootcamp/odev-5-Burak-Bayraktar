import { FC } from 'react'
import ToDoItem from '../ToDoItem'
import Footer from '../Footer';
import { useToDo } from '../../../contexts/ToDoContext';
const ToDoList: FC = () => {
    const result = useToDo();
    console.log(result);
    return (
        <>
            <div className="to-do-list">
                {
                    result?.toDoList.map(({text, isCompleted, id}) => {
                        return <ToDoItem key={id} id={id} isCompleted={isCompleted} text={text} />
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default ToDoList
