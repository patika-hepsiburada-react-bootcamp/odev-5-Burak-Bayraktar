import React, { ChangeEvent, useState } from "react";
import "../styles.scss";
import { buttons } from "./buttons.js";

const Footer = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    console.log(index);
    setSelectedItem(index);
    console.log(event.target.value);
  };

  return (
    <div className="footer">
      <span className="items-left">2 items left</span>
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
                    checked={index === selectedItem ? true: false}
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
      <button className="clear-button">Clear Completed</button>
    </div>
  );
};

export default Footer;
