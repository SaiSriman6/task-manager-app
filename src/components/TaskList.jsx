import React from 'react'
import TaskItem from './TaskItem'
function TaskList({ tasks, deleteTask, taskCompleted }) {
  return (
   <div className="flex flex-col gap-3 w-full md:w-2/3">
      {tasks.length===0?(<h3 className="text-gray-500">No Tasks Yet</h3>):(
        tasks.map((task) => (
          <TaskItem key={task.id} tasks={task} deleteTask={deleteTask} taskCompleted={taskCompleted}/>
        ))
      )}
    </div>
  )
}
export default TaskList