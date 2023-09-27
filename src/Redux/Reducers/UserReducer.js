import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  users: [{ id: 1, name: "haris", username: "haris", password: "123" }],
};

export const userSlice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    addUser: (state, action) => {
      state.users.push({
        id: state.users.length + 1,
        name: action.payload.name,
        username: action.payload.username,
        password: action.payload.password,
      });
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
