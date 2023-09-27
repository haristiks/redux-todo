import React from "react";
import CreateTodo from "./cards/CreateTodo";
import ListTodo from "./cards/ListTodo";

function Home() {
  return (
    <div>
      <CreateTodo />
      <ListTodo />
    </div>
  );
}

export default Home;
