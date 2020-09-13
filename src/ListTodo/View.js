import React from "react";
import { timeDateMinutes } from "../components/utils";

const View = ({ todoList, handleCheckbox, handleDelete }) => {
  return (
    <>
      <ul className="list-group">
        {todoList &&
          todoList?.map((value, index) => (
            <div
              key={index + 1}
              className="list-group-item d-flex flex-row justify-content-between align-items-center mt-3 p-3"
            >
              <input
                type="checkbox"
                checked={value.completed}
                onClick={() => handleCheckbox(index, value)}
              />
              <ul className={value.completed ? `text-display` : ""}>
                <div className="mr-3">
                  <div className="align-items-left">{value.text}</div>
                  <div
                    style={{
                      display: "block",
                      // float: "right",
                      fontSize: "15px",
                      // marginRight: "0px",
                      textAlign: "right",
                    }}
                  >
                    {timeDateMinutes(value.createdDate)}
                  </div>
                </div>
              </ul>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          ))}
      </ul>
    </>
  );
};

export default View;
