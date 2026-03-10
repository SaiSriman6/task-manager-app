import React from 'react'
import {useForm} from 'react-hook-form'

function AddTaskForm({ addTask }) {
  let { register, handleSubmit, reset } = useForm()

  const onSubmit = (taskObj) => {
    addTask(taskObj)
    reset()
  }

  return (
    <div className="w-full md:w-1/3">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
       <input type="text" {...register("title",{minLength:3})} placeholder="Task title"
         className="border rounded p-2 w-full"/>
        <select {...register("priority")} className="border rounded p-2">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button type="submit" className="bg-amber-500 text-white p-2 rounded hover:bg-amber-600">Add Task</button>
      </form>
    </div>
  )
}

export default AddTaskForm