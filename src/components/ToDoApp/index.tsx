import React, { FC } from 'react'
import Header from '../Header'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import './styles.scss'
const ToDoApp: FC = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <ToDoInput />
            <ToDoList />
        </div>
    )
}

export default ToDoApp
