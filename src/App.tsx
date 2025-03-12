import { useState } from "react";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";

type ToDo = {
  id: string;
  title: string;
  completed: boolean;
};

export default function App() {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  function addToDo(title: string) {
    setToDos((currentToDos) => [
      ...currentToDos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function toggleToDo(id: string, completed: boolean) {
    setToDos((currentToDos) =>
      currentToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, completed } : toDo
      )
    );
  }

  function deleteToDo(id: string) {
    setToDos((currentToDos) => currentToDos.filter((toDo) => toDo.id !== id));
  }

  return (
    <>
      <h1 className="header">Todo List</h1>
      <ToDoForm onSubmit={addToDo} />
      <ToDoList toDos={toDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
    </>
  );
}
