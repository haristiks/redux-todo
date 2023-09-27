import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  todos: [{ id: Date.now(), value: "Hi, Welcome", editkey: true }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: INITIAL_STATE,
  reducers: {
    addTodos: (state, action) => {
      state.todos.push({
        id: Date.now(),
        value: action.payload,
        editkey: true,
      });
    },
    deleteTodos: (state, action) => {
      const filtered = state.todos.filter((item) => item.id != action.payload);
      state.todos = filtered;
    },
    editTodos: (state, action) => {
      state.todos.find((item) => {
        if (item.id == action.payload) {
          item.editkey = false;
        }
      });
    },
    saveTodos: (state, action) => {
      state.todos.find((item) => {
        if (item.id == action.payload.id) {
          item.value = action.payload.value;
          item.editkey = true;
        }
      });
    },
  },
});

export const { addTodos, deleteTodos, saveTodos, editTodos } = todoSlice.actions;
export default todoSlice.reducer;
