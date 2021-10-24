import { createContext, FC, useContext, useState } from "react";
import { buttons } from "../components/ToDoApp/TaskManagers/buttons";
import { ITodo, ISelectedItem} from "../interfaces";
import { ITodoContext } from "../interfaces/contexts";

const filtered = buttons.map(button => button.value);
const initialState = {
    toDoList: [],
    setToDoList: () => {},
    selectedItem: {index: 0, name: String(filtered[0])},
    setSelectedItem: () => {},
    itemsLeft: 0,
    setItemsLeft: () => {},
    handleSetItemsValue: () => {}
}

export const ToDo = createContext<ITodoContext>(initialState);
export const ToDoProvider:FC = ({children}) => {
    const [selectedItem, setSelectedItem] = useState<ISelectedItem>({index: 0, name: String(filtered[0])});
    const [toDoList, setToDoList] = useState<ITodo[]>([]);
    const [itemsLeft, setItemsLeft] = useState<number>(0);
    
    const handleSetItemsValue = (value: ITodo[]) => {
        const newList = [...value];
        const activeItems = newList.filter(item => item.isCompleted === false).length
        setItemsLeft(activeItems)
    }

    const values = {
        selectedItem, 
        setSelectedItem, 
        toDoList, 
        setToDoList, 
        itemsLeft, 
        handleSetItemsValue
    }

    return <ToDo.Provider value={values}>{children}</ToDo.Provider>
}

export const useToDo = () => useContext(ToDo);