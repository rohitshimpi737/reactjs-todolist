import React from "react";

function Todoinput(props) {
  const { addTodo , todoValue , setTodoValue  } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Add a new todo"
      />
      <button
        onClick={() => {
          addTodo(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}

export default Todoinput;
