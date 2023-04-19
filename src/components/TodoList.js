import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <ul className="todo-list">
      {props.items.map((item) => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
};

export default TodoList;
