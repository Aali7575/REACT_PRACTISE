import React, { useState } from "react";

function Todos() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editingTask, setEditingTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const handleEditTask = (index) => {
    setIsEditing(index);
    setEditingTask(tasks[index].text);
  };

  const handleUpdateTask = (index) => {
    if (editingTask.trim() !== "") {
      setTasks(
        tasks.map((task, i) =>
          i === index ? { text: editingTask, completed: task.completed } : task
        )
      );
      setIsEditing(null);
      setEditingTask("");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold underline">My To Do List</h1>
      <form onSubmit={handleAddTask} className="flex mt-5">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="px-3 py-2 border border-gray-400 rounded-md mr-2"
          placeholder="Add a new task"
        />
        <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md">
          Add
       task
        </button>
      </form>
      <ul className="list-disc list-inside mt-5">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => {
                setTasks(
                  tasks.map((t, i) =>
                    i === index ? { ...t, completed: !t.completed } : t
                  )
                );
              }}
              className="mr-2"
            />
            {isEditing === index ? (
              <input
                value={editingTask}
                onChange={(e) => setEditingTask(e.target.value)}
                className="px-3 py-2 border border-gray-400 rounded-md mr-2"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleUpdateTask(index);
                  }
                }}
              />
            ) : (
              <span
                onClick={() => handleEditTask(index)}
                className="cursor-pointer text-blue-500 underline"
              >
                {task.text}
              </span>
            )}
            {isEditing !== index && (
              <>
                <button
                  onClick={() => handleEditTask(index)}
                  className="flex-shrink-0 ml-2 px-3 py-2 bg-blue-500 text-white rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="flex-shrink-0 ml-2 px-3 py-2 bg-red-500 text-white rounded-md"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;