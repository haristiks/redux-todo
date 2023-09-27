import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { loggin } from "./Redux/Reducers/LoginStatus";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/signup" element={<Register />} />
        {loggin?<Route path="/home" element={<Home />} />:alert("please login")}
        
      </Routes>
    </>
  );
}

export default App;
