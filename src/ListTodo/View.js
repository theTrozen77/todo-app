import React from "react";
import moment from "moment";
const View = ({ todoList, handleCheckbox, handleDelete }) => {
  const totalEntries = todoList.length;
  const completed = todoList?.filter((item) => item.completed === true);

  return (
    <>
      <div className="view-todo">
        <div>
          Total Number of items: {totalEntries}
          Completed: {completed.length}
        </div>
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
                  {value.createdDate.format("YYYY/MM/D hh:mm")}
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
