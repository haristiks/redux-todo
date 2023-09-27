import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../Reducers/TodoReducer";
import UserReducer from "../Reducers/UserReducer";
import LoginStatus from "../Reducers/LoginStatus";

export default configureStore({
    reducer:{
        todos:TodoReducer,
        users:UserReducer,
        loginStats:LoginStatus,
    }
})