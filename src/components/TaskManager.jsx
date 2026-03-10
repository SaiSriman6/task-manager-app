import React from 'react'
import {useState} from 'react'
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'

function TaskManager() {
  let [tasks,setTasks]=useState([])
   function addTask(taskData) {
    const newTask = {
      id: Date.now(), 
      title: taskData.title,
      priority: taskData.priority,
      completed: false
    }
    setTasks(prev => [...prev, newTask])
  }

  function deleteTask(taskId) {
    setTasks(prev => prev.filter(task => task.id !== taskId))
  }
  function taskCompleted(taskId){
    setTasks(prev=>prev.map(task=>{
      if(task.id===taskId){
        return {...task,completed:!task.completed}
      }
      return task;
    }))
  }
 
 return (
  <div className="flex flex-col md:flex-row gap-8">
    <AddTaskForm addTask={addTask} />
    <TaskList  tasks={tasks} deleteTask={deleteTask} taskCompleted={taskCompleted}/>
  </div>
)
}

export default TaskManager;