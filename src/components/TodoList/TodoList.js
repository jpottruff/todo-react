import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="no-items-msg">No Items</h2>;
  }

  return (
    <ul className="todo-list">
      {props.items.map((item) => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
};

export default TodoList;
