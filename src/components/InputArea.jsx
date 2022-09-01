import React, { useState } from "react";
import axios from "axios";
import qs from "qs";


function InputArea(props) {
  const [inputText, setInputText] = useState({text: ""});

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
    console.log(newValue);
  }

  function submitTodo(event){
    console.log(inputText);

    const data = qs.stringify({text: inputText});
    axios.post("http://localhost:3000", data)
    .then(res => console.log(res.data));

    setInputText({text: ""});
    event.preventDefault();
  }


  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText.text} />
      <button onClick={submitTodo}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
