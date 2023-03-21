import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDoList((currList) => [toDo, ...currList]);
    setToDo("");
  };

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          value={toDo}
          placeholder="Write something to do..."
        />
        <button>Add ToDo</button>
      </form>
      <div>
        <h2>Here is what you have to do (total : {toDoList.length})</h2>
        {toDoList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
