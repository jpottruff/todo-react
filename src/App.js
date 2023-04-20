import React from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

function App() {
  const items = [
    { id: "todo1", text: "eat apples" },
    { id: "todo2", text: "bake bread" },
    { id: "todo3", text: "walk dog" },
  ];

  return (
    <div>
      <h1 className="title">Todo List React</h1>
      <TodoList items={items} />
    </div>
  );
}

export default App;
