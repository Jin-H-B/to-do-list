import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleOnChange = (event) => {
    setToDo(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDoList((currList) => [toDo, ...currList]);
    setToDo("");
  };

  const handleDeleteToDo = (index) => {
    console.log(index);
    setToDoList((currList) => currList.filter((_, idx) => idx !== index));
  }

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={handleOnChange}
          type="text"
          value={toDo}
          placeholder="Write something to do..."
        />
        <button>Add ToDo</button>
      </form>
      <div>
        <h2>Here is what you have to do (total : {toDoList.length})</h2>
        {toDoList.map((item, idx) => (
          <li key={idx}>{item}
            <button onClick={() => handleDeleteToDo(idx)}>❌</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
