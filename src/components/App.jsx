import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import useWindowSize from "../utils/useWindowSize";

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

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
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
              {items.map((todoItem, index) => (
                <ToDoItem
                  key={index}
                  id={index}
                  text={todoItem}
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
