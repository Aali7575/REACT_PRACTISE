import React from "react";
import { useNavigate } from "react-router-dom";
import 'tailwindcss/tailwind.css';

function Start() {
  const navigate = useNavigate();

  const handleAddTask = () => {
    navigate('/todos');
  }

  return (
    <div className="flex justify-center items-center h-screen">

      <div className="w-1/2">

        <h1 className="text-3xl font-bold underline">
          Welcome To Our To Do List
        </h1>

        <button 
          onClick={handleAddTask}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5"
        >
          Add Task
        </button>

      </div>

    </div>
  )
}

export default Start