type ToDo = {
    id: string;
    title: string;
    completed: boolean;
  };
  
  type ToDoListProps = {
    toDos: ToDo[];
    toggleToDo: (id: string, completed: boolean) => void;
    deleteToDo: (id: string) => void;
  };
  
  export function ToDoList({ toDos, toggleToDo, deleteToDo }: ToDoListProps) {
    return (
      <ul className="list">
        {toDos.length === 0 && "No Todos"}
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <label>
              <input
                type="checkbox"
                checked={toDo.completed}
                onChange={(e) => toggleToDo(toDo.id, e.target.checked)}
              />
              {toDo.title}
            </label>
            <button
              onClick={() => deleteToDo(toDo.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
  