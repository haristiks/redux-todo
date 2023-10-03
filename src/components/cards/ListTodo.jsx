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

  const revTodo=Todos.map(item=>item).reverse()
  
  return (
    <div className="conatiner">
      {revTodo.map((todo, index) => (
        <div className="list-item" key={index}>
          {todo.editkey ? (
            <>
              <p>{todo.value}</p>

              <button
                className="delete"
                onClick={() => dispatch(editTodos(todo.id))}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button onClick={() => dispatch(deleteTodos(todo.id))}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </>
          ) : (
            <>
              <input type="text" ref={todoRef} placeholder={todo.value} id="editinput"  />{" "}
              <button type="button" onClick={() => save(todo.id)}>
                <i className="fa-solid fa-circle-check"></i>
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ListTodo;
