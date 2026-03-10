import React from 'react'

function TaskItem(props) {
  let { title, priority } = props.tasks
  let deleteTask = props.deleteTask
  let taskCompleted = props.taskCompleted

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-gray-50 w-full">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">
        Priority: {priority}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        <button onClick={() => taskCompleted(props.tasks.id)}
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
          {props.tasks.completed ? "Completed" : "Incomplete"}
          </button>
        <button onClick={() => deleteTask(props.tasks.id)}
         className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Delete
        </button>
      </div>
    </div>
  )
}
export default TaskItem