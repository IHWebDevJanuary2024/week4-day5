import './App.css'
import HomePage from './pages/HomePage'
import TasksPage from './pages/TasksPage'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import TasksSummary from './components/TasksSummary'
import taskJson from './tasks-data.json';
import { useState } from 'react'

function App() {
  const [tasksData, setTasksData] = useState(taskJson);
  const [count, setCount] = useState(tasksDone())

  function tasksDone() {
    let count = 0
    tasksData.forEach((task) => {
      if (task.isDone) {
        count++;
      }
    })
    return count
  }

  return (
    <>
      <Navbar />
      <TasksSummary count={count} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/tasks' element={<TasksPage setCount={setCount} tasksData={tasksData} />} />
      </Routes>
    </>
  )
}

export default App
