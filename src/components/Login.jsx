import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loggin } from "../Redux/Reducers/LoginStatus";
import './Auth.css';

function Login() {
  const user = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const Username = e.target.username.value;
    const Password = e.target.password.value;
    const logged=user.filter((user)=>user.username==Username && user.password==Password)
    if (logged) {
        dispatch(loggin())
        navigate("/home")
    }else{
        alert("user not found")
    }
  };
  return (
    <div className="container">
      <form action="" onSubmit={handleLogin}>
        <h2>Login to use TODO</h2>
        <label htmlFor="username">
          Username:
          <br />
          <input type="text" id="username" />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <br />
          <input type="text" id="password" />
          <br />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>
        Dont have an Account ?<br />
        <Link to={'/signup'}>SignUp</Link>
      </p>
    </div>
  );
}

export default Login;
