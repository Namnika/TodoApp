import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import useWindowSize from "../utils/useWindowSize";
import axios from "axios";

function App() {

  const [items, setItems] = useState([]);
  const { width } = useWindowSize();

  function addItem(newInputText) {
    setItems(prevItems => {
      return [...prevItems, newInputText];
    });
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
          <InputArea click={addItem} />
          <div>
            <ul>
              {items.map((todolist) => {
                return (
                <ToDoItem
                  key={todolist._id}
                  _id={todolist._id}
                  text={todolist.text}
                  onChecked={deleteItem}
                />
              );
            })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
