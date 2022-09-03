import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import Tooltip from '@mui/material/Tooltip';

function InputArea(props) {

  const [inputText, setInputText] = useState({
    text: ""
  });
  function handleChange(event) {
    const {name, value} = event.target;
    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitTodo(event){
    const data = qs.stringify({
      text: inputText.text
    });
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    axios.post("https://todo-ag6q3omku-namnika.vercel.app/", data, headers)
    .then(res => console.log(res.data));

    setInputText({text: ""});
    event.preventDefault();
  }


  return (
    <div className="form">
    <Tooltip title="Click on item to delete!" arrow>
    <QuestionMarkRoundedIcon sx={{ fontSize: 13 }} />
    </Tooltip>
      <input
      name="text"
      onChange={handleChange}
      value={inputText.text}
      />
      <button onClick={submitTodo}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
