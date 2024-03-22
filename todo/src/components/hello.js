import React from "react"
import { useNavigate } from 'react-router-dom'

function Start () {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold underline">Welcome To Our To Do List</h1>
        <p className="text-gray-600">
          Get started by adding a new task to your to-do list.
        </p>
        <button className="mt-5 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Add Task
        </button>
      </div>
    </div>
  )
};

  

export default  Start