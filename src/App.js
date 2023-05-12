import React, { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import NewTodoForm from "./components/NewTodoForm/NewTodoForm";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodoHandler = async (newTodo) => {
    setTodoItems((prevItems) => {
      return prevItems.concat({
        ...newTodo,
        id: `${prevItems.length + 1}`, // * This obviously isn't realistic
      });
    });
  };

  return (
    <div>
      <h1 className="title">Todo List React</h1>
      <NewTodoForm onAddTodo={addTodoHandler} />
      <TodoList items={todoItems} />
    </div>
  );
}

export default App;
