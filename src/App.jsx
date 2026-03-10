import TaskManager from './components/TaskManager'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-center mb-6">
          Task Manager
        </h1>

        <TaskManager />
      </div>
    </div>
  )
}

export default App