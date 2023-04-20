import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = () => {
  const [newItem, setNewItem] = useState("");

  const textChangeHandler = (event) => setNewItem(event.target.value);

  const addTodoHandler = (event) => {
    event.preventDefault();
    console.log(newItem);
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input value={newItem} onChange={textChangeHandler} type="text" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
