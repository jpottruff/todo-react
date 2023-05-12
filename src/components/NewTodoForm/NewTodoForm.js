import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = (props) => {
  const [newItemText, setNewItemText] = useState("");

  const textChangeHandler = (event) => setNewItemText(event.target.value);

  const submitTodoHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: undefined,
      text: newItemText,
    };
    props.onAddTodo(newTodo);
    setNewItemText("");
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <input value={newItemText} onChange={textChangeHandler} type="text" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
