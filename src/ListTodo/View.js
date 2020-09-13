import React from "react";
import { timeDateMinutes } from "../components/utils";

const View = ({ todoList, handleCheckbox, handleDelete }) => {
  return (
    <>
      <div className="view-todo">
        <div>
          {todoList &&
            todoList?.map((value, index) => (
              <div key={index + 1}>
                <input
                  type="checkbox"
                  checked={value.completed}
                  onClick={() => handleCheckbox(index, value)}
                />
                <li className={value.completed ? `text-display` : ""}>
                  {value.text}
                  {timeDateMinutes(value.createdDate)}
                </li>
                <button onClick={() => handleDelete(index)}>remove</button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default View;
