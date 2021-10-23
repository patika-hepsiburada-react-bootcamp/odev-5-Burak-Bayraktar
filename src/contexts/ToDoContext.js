import { createContext, useContext } from "react";

const ToDo = createContext();

export const ToDoProvider = ({children}) => {
    return <ToDo.Provider>{ children }</ToDo.Provider>
}

export const useTodo = () => useContext(ToDo)