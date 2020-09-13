import React, { useState, useEffect } from "react";
import "../design/css/todo.css";
import moment from "moment";
import View from "./View";

const Todo = () => {
  const [values, setValues] = useState({
    text: "",
    createdDate: new Date().getTime(),
    completed: false,
  });

  const [todoList, setTodoList] = React.useState([]);
  useEffect(() => {
    const storageData = localStorage.getItem("todo-data");
    const parsedArray = JSON.parse(storageData);
    setTodoList(parsedArray);
  }, []);

  console.log("todoList", todoList);

  useEffect(() => {
    localStorage.setItem("todo-data", JSON.stringify(todoList));
  }, [todoList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.text.length > 0) {
      setTodoList([...todoList, values]);
      setValues({ ...values, ...{ text: "" } });
    }
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

  const totalEntries = todoList.length;
  const completed = todoList?.filter((item) => item.completed === true);

  // const showSelectedDate = (value) => {
  //   if (value === "today") {
  //     const filteredData = todoList?.map(
  //       (list) => list.createdDate > moment().startOf("day")
  //     );
  //     console.log(filteredData);
  //     setTodoList(filteredData);
  //   }
  // };
  return (
    <div className="todo-home">
      <div className="todo-container">
        <h1>TODO APP</h1>
        <div className="left-nav-bar">
          Total Number of items: {totalEntries}
          Completed: {completed.length}
          <span onClick={() => showSelectedDate("today")}>Today</span>
          <span>Tomorrow</span>
        </div>
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

        <div>
          <View
            todoList={todoList}
            handleDelete={handleDelete}
            handleCheckbox={handleCheckbox}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
