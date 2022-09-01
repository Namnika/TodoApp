import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import useWindowSize from "../utils/useWindowSize";
import axios from "axios";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const { width } = useWindowSize();

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }


  useEffect(() => {
    axios.get("http://localhost:3000/")
    .then(res => {
      setItems(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  })


  function deleteItem(id) {
    axios.delete(`http://localhost:3000/${id}`)
      .then(res => console.log(res.data));
    setItems((prevItems) => {
      return prevItems.filter(todolist => todolist._id !== id);
    });
  }

  return (
    <div>
      {width > 700 && (
        <div className="container">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <InputArea change={handleChange} click={addItem} text={inputText} />
          <div>
            <ul>
              {items.map((todolist) => (
                <ToDoItem
                  key={todolist._id}
                  id={todolist._id}
                  text={todolist.text}
                  onChecked={deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
