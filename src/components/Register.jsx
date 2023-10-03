import React from "react";
import { Link } from "react-router-dom";
import { addUser } from "../Redux/Reducers/UserReducer";
import { useDispatch } from "react-redux";
import './Auth.css';

function Register() {
  const dispatch = useDispatch();
  const userRegistraion = (e) => {
    e.preventDefault();
    const Name=e.target.name.value;
    const Username=e.target.username.value;
    const Password=e.target.password.value;
    dispatch(addUser({name:Name,username:Username,password:Password}))
    alert("User Registration Successfull")
    e.target.reset()
  };

  return (
    <div className="container">
      <form action="" onSubmit={userRegistraion}>
        <h2>Register Here</h2>
        <label htmlFor="name">
          Name:
          <br />
          <input type="text" id="name" />
        </label>
        <br />
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
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <p>
        allredy have an Account ?<br />
        <Link to={'/'}>Login</Link>
      </p>
    </div>
  );
}

export default Register;
