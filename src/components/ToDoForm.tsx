import { useState } from "react";

type ToDoFormProps = {
  onSubmit: (newItem: string) => void;
};

export function ToDoForm({ onSubmit }: ToDoFormProps) {
  const [newItem, setNewItem] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem); // Calls the passed function with newItem

    setNewItem(""); // Clears the input field
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
