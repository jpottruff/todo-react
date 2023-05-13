import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="no-items-msg">No Items</h2>;
  }

  const clickHandler = (item) => {
    props.onDelete(item);
  };

  return (
    <ul className="todo-list">
      {props.items.map((item) => {
        return (
          <li key={item.id}>
            <span>{item.text}</span>
            <button className="btn" onClick={() => clickHandler(item)}>
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
