import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import useWindowSize from "../utils/useWindowSize";
import axios from "axios";





function App() {
  const [items, setItems] = useState([]);
  const { width } = useWindowSize();
  const [smShow, setSmShow] = useState(false);


  function addItem(newInputText) {
    setItems(prevItems => {
      return [...prevItems, newInputText];
    });
  }

  useEffect(() => {
    axios.get("http://localhost:5000/")
    .then(res => {
      setItems(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  });


  function deleteItem(id) {
    axios.delete(`http://localhost:5000/${id}`)
      .then(res => console.log(res.data));
    setItems((prevItems) => {
      return prevItems.filter(inputText => inputText._id !== id);
  })};

  return (
    <div>

      {width > 700 && (

        <div className="container">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <QuestionMarkRoundedIcon />
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
      )}
    </div>
  );
}

export default App;
