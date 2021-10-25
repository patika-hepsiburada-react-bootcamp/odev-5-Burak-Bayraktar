import React, { FC } from 'react'
import Header from '../Header'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import './styles.scss'
import TaskManagers from './TaskManagers'
import Credits from './Credits'

const ToDoApp: FC = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <ToDoInput />
            <ToDoList />
            <TaskManagers />
            <Credits />
        </div>
    )
}

export default ToDoApp
