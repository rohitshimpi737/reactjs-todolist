import { useState, useEffect } from "react";
import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    "Go to Gym",
    "Buy groceries",
    "Learn React",
    "Learn Node",
  ]);

  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function addTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueTobeEdited = todos[index];
    setTodoValue(valueTobeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let locaTodos = localStorage.getItem("todos");
    if (!locaTodos) {
      return;
    }
    locaTodos = JSON.parse(locaTodos).todos;
    setTodos(locaTodos);
  }, []);
  return (
    <>
      <Todoinput
        addTodo={addTodo}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
