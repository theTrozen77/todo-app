import React, { useState } from "react";
import "../design/css/todo.css";
import moment from "moment";
import View from "./View";

const Todo = () => {
  const [values, setValues] = useState({
    text: "",
    createdDate: moment(),
    completed: false,
  });
  const [todoList, setTodoList] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, values]);
    setValues({ ...values, ...{ text: "" } });
  };

  const handleDelete = (index) => {
    const tempArr = [...todoList];
    if (index > -1) {
      tempArr.splice(index, 1);
      setTodoList(tempArr);
    }
  };

  const handleCheckbox = (index, value) => {
    const tempArr = [...todoList];
    const newObj = { ...value, completed: !value.completed };
    tempArr[index] = newObj;
    setTodoList(tempArr);
  };

  return (
    <div className="todo-home">
      <div className="todo-container">
        <h1>TODO APP</h1>
        <form className={"input-form"}>
          <input
            type="text"
            name="todo"
            placeholder="Todo"
            value={values.text}
            onChange={(e) => {
              setValues({ ...values, text: e.target.value });
            }}
          ></input>
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        </form>
        {/* 
      <div>
        <View
          todoList={todoList}
          handleDelete={handleDelete}
          handleCheckbox={handleCheckbox}
        />
      </div> */}
      </div>
    </div>
  );
};

export default Todo;
