import { nanoid } from "nanoid";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useToDo } from "../../../contexts/ToDoContext";
import "../styles.scss";

let markAsActiveAll = false;
const ToDoInput = () => {
  const [value, setValue] = useState<string>("");
  const {toDoList, setToDoList, handleSetItemsValue} = useToDo();

  const keyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && value.length) {
      const newList = [ ...toDoList, { id: nanoid(), text: value, isCompleted: false }];
      handleSetItemsValue(newList);
      setToDoList(newList);
      setValue("");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    const newList = [...toDoList];
    markAsActiveAll = markAsActiveAll ? false : true;
    debugger;
    const list = newList.map(item => ({...item, isCompleted: markAsActiveAll}))  
    handleSetItemsValue(list)
    setToDoList(list)

  }

  return (
  <>
    <div className="to-do-input-wrapper">
      <input onClick={handleClick} className={`${markAsActiveAll ? "marked" : "unmarked"} mark-button`} type="button" value="✓" />
      <input
        className="text"
        type="text"
        placeholder="What needs to be done?"
        value={value}
        onKeyDown={keyDownHandler}
        onChange={handleChange}
      />
    </div>
    {
      toDoList.length ? <div className="edit-info">Click on the relevant task to edit the task content </div> : ""
    }
    </>
  );
};

export default ToDoInput;
