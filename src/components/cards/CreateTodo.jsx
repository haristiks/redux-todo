import React from "react";
import { addTodos } from "../../Redux/Reducers/TodoReducer";
import { useDispatch } from "react-redux";

function CreateTodo() {
  const dispatch = useDispatch();
  const add = (e) => {
    e.preventDefault();
    const value = e.target.add.value;
    dispatch(addTodos(value));
    e.target.reset();
  };
  return (
    <div className="container">
      <form action="" onSubmit={add}>
        <h1>ADD TODO</h1>
        <input type="text" id="add" />
        <button type="submit" className="btnAdd">
          <i className="fa-solid fa-circle-check"></i>
        </button>
      </form>
    </div>
  );
}

export default CreateTodo;
