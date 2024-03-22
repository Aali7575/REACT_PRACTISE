import React from "react";
import { useNavigate } from "react-router-dom";

function Start () {
  const navigate = useNavigate();
  const handleAddTask = () => {
    navigate('/todos');
  }
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Welcome To Our To Do List</h1>
      <button onClick={handleAddTask}>Add task</button>
    </div>
  )
}

export default  Start