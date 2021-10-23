import { nanoid } from "nanoid";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useToDo } from "../../../contexts/ToDoContext";
import "../styles.scss";

const ToDoInput = () => {
  const [value, setValue] = useState<string>("");
  const {toDoList, setToDoList} = useToDo();

  const keyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && value.length) {
      const test = [ ...toDoList, { id: nanoid(), text: value, isCompleted: false }];
      setToDoList(test);
      setValue("");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div className="to-do-input-wrapper">
      <input className="mark-all-button" type="button" value="✓" />
      <input
        className="text"
        type="text"
        placeholder="What needs to be done?"
        value={value}
        onKeyDown={keyDownHandler}
        onChange={handleChange}
      />
    </div>
  );
};

export default ToDoInput;
