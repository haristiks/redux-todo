import React from "react";
import { Link } from "react-router-dom";
import { addUser } from "../Redux/Reducers/UserReducer";
import { useDispatch } from "react-redux";

function Register() {
  const dispatch = useDispatch();
  const userRegistraion = (e) => {
    e.preventDefault();
    const Name=e.target.name.value;
    const Username=e.target.username.value;
    const Password=e.target.password.value;
    dispatch(addUser({name:Name,username:Username,password:Password}))
    e.target.reset()
  };

  return (
    <div className="container">
      <form action="" onSubmit={userRegistraion}>
        <h2>Register Here</h2>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" />
        </label>
        <label htmlFor="username">
          Username:
          <input type="text" id="username" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="text" id="password" />
        </label>
        <button type="submit">Register</button>
      </form>
      <p>
        allredy have an Account ?<br />
        <Link>Login</Link>
      </p>
    </div>
  );
}

export default Register;
