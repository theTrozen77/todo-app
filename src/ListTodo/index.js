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
  const [filteredData, setFilteredData] = useState([]);

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
  //   let filteredData = [];
  //   if (value === "today") {
  //     filteredData = todoList?.filter(
  //       (list) => list.createdDate > moment().startOf("day")
  //     );
  //   }
  //   if (value === "tomorrow") {
  //     filteredData = todoList?.filter(
  //       (list) => list.createdDate > moment().endOf("day")
  //     );
  //   }
  // };

  return (
    <>
      <h1>TODO APP</h1>
      <div className="row">
        <div className="col-2 side-nav p-4">
          <div className="mb-2">Total Number of items: {totalEntries}</div>
          <div className="mb-2">Completed: {completed.length}</div>
          {/* <span onClick={() => showSelectedDate("today")}>Today</span>
          <span onClick={() => showSelectedDate("tomorrow")}>Tomorrow</span> */}
        </div>
        <div className="col-10">
          <form className="row mb-3 form-input">
            <div className="col-10 ">
              <input
                className="form-control"
                name="todo"
                placeholder="Todo"
                value={values.text}
                onChange={(e) => {
                  setValues({ ...values, text: e.target.value });
                }}
              ></input>
            </div>
            <div className="col-2 input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="submit"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </form>
          <div>
            <View
              todoList={todoList}
              filteredData={filteredData}
              handleDelete={handleDelete}
              handleCheckbox={handleCheckbox}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
