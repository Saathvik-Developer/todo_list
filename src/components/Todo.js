import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddCircle } from "@mui/icons-material";
import { RemoveCircle } from "@mui/icons-material";
import "./todo.css"
import {db} from "../firebase"
import { doc,updateDoc } from "firebase/firestore";
export default function Todo({ todo, toggleComplete, handleDelete, handleEdit,id}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);
  const [counter,setCounter] = React.useState(todo.counter)
 
  
  
  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  const handleIncrease = async(id,counter) =>{
    if (isNaN(counter)){
      counter = 0
    }
    setCounter(counter+1)
    const UserDoc = doc(db,"todos",id)
    const increment = {counter : counter+1}
    await updateDoc(UserDoc,increment)

  }
  const handleDecrease = async(id,counter) =>{
    if (counter!== 0){

      setCounter(counter-1)
    }
    const UserDoc = doc(db,"todos",id)
    const decrement = {counter : counter-1}
    await updateDoc(UserDoc,decrement)
  }
  
  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      />
      <div className="btn_grp">
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
      <button className="button-edit" onClick={() => {handleIncrease(todo.id,todo.counter)}}>
        <AddCircle />
      </button>
      <div className="counter_display">

      {Number(counter)}
      </div>
      <button className="button-delete" onClick={() => {handleDecrease(todo.id,todo.counter)}}>
        <RemoveCircle/>
      </button>
    </div>
  );
}
