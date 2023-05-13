import React, { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import NewTodoForm from "./components/NewTodoForm/NewTodoForm";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodoHandler = (newTodo) => {
    setTodoItems((prevItems) => {
      return prevItems.concat({
        ...newTodo,
        id: `${Date.now()}`, // * This obviously isn't realistic
      });
    });
  };

  const deleteTodoHandler = (deletedItem) => {
    setTodoItems((prevItems) =>
      prevItems.filter((item) => item.id !== deletedItem.id)
    );
  };

  return (
    <div>
      <h1 className="title">Todo List React</h1>
      <NewTodoForm onAddTodo={addTodoHandler} />
      <TodoList items={todoItems} onDelete={deleteTodoHandler} />
    </div>
  );
}

export default App;
