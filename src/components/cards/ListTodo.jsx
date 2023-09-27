import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodos,
  editTodos,
  saveTodos,
} from "../../Redux/Reducers/TodoReducer";

function ListTodo() {
  const Todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const todoRef = useRef();
  const save = (id) => {
    const editedTodo = todoRef.current.value;
    dispatch(saveTodos({ id: id, value: editedTodo }));
  };
  return (
    <div className="conatiner">
      {Todos.map((todo, index) => (
        <div className="list-item" key={index}>
          {(todo.editkey) ? (
            <>
              <p>{todo.value}</p>

              <button
                className="delete"
                onClick={() => dispatch(editTodos(todo.id))}
              >
                edit
              </button>
              <button onClick={() => dispatch(deleteTodos(todo.id))}>
                dlt
              </button>
            </>
          ) : (
            <>
              <input type="text" ref={todoRef} placeholder={todo.value} />{" "}
              <button type="button" onClick={() => save(todo.id)}>
                save
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ListTodo;
