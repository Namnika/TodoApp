import React from "react";


function ToDoItem(props){
  function handleClick(){
    props.onChecked(props.id);
    console.log(props);
  }


  return (
    <div
      onClick={handleClick}>
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
