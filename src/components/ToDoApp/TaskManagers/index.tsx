import React, { ChangeEvent, FC } from "react";
import { useToDo } from "../../../contexts/ToDoContext";
import "../styles.scss";
import { buttons } from "./buttons.js";

const TaskManagers: FC = () => {
  const { selectedItem, setSelectedItem, itemsLeft, toDoList, setToDoList, handleSetItemsValue } = useToDo();
  const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    setSelectedItem({index: index, name: event.target.value});
  };

  const handleClick = () => {
    const newList = [...toDoList];
    const list = newList.filter(item => !item.isCompleted);
    
    handleSetItemsValue(list)
    setToDoList(list)
  }

  return (
    <>
    <div className="task-managers">
      <span className="items-left">{ itemsLeft } items left</span>
      <div className="buttons">
        {buttons.map((button, index) => (
            <React.Fragment key={button.id}>
                <input
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleChange(event, index)
                    }
                    type={button.type}
                    name={button.name}
                    id={button.id}
                    value={button.value}
                    checked={index === selectedItem.index ? true: false}
                    />
                    <label
                    className="input-label"
                    htmlFor={button.for}
                >
                {button.value}
                </label>
            </React.Fragment>
        ))}
      </div>
      <button onClick={handleClick} className="clear-button">Clear Completed</button>
    </div>
    <div className="credits">Created by <a href="https://github.com/Burak-Bayraktar">Burak-Bayraktar</a></div>
    </>
  );
};

export default TaskManagers;
