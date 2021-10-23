import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from "react";
import { ITodo } from "../interfaces/ITodo";

export interface ITodoContext {
    toDoList: ITodo[],
    setToDoList: Dispatch<SetStateAction<ITodo[]>>,
}

const initialState = {
    toDoList: [],
    setToDoList: () => {}
}

export const ToDo = createContext<ITodoContext>(initialState);

export const ToDoProvider:FC = ({children}) => {
    const [toDoList, setToDoList] = useState<ITodo[]>([]);
    
    const values = {toDoList, setToDoList}
    return <ToDo.Provider value={values}>{children}</ToDo.Provider>
}

export const useToDo = () => useContext(ToDo);