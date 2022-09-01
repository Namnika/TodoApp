import React from "react";

function ToDoItem(props){
  return (
    <div
      onClick={() => {props.onChecked(props._id);
        console.log(props)}}>
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
