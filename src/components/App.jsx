import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import axios from "axios";


function App() {
  const [items, setItems] = useState([]);


  function addItem(newInputText) {
    setItems(prevItems => {
      return [...prevItems, newInputText];
    });
  }

  useEffect(() => {
    axios.get("https://todo-ag6q3omku-namnika.vercel.app/")
    .then(res => {
      setItems(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  });


  function deleteItem(id) {
    axios.delete(`https://todo-ag6q3omku-namnika.vercel.app/${id}`)
      .then(res => console.log(res.data));
    setItems((prevItems) => {
      return prevItems.filter(inputText => inputText._id !== id);
  })};


  return (
      <div className="container">
        <div className="heading">
          <h1 style={{fontFamily: '"Architects Daughter", cursive'}}>To-Do List</h1>
        </div>
        <InputArea onAdd={addItem} />
        <div>
          <ul>
            {items.map((inputText) => {
              return (
                <ToDoItem
                key={inputText._id}
                id={inputText._id}
                text={inputText.text}
                onChecked={deleteItem}
              />
            );
          })
        }
      </ul>
    </div>
  </div>
);}

export default App;
