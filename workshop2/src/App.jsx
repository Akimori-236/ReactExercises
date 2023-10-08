import { useState } from 'react'
import './App.css'
import { DisplayTasks } from './components/DisplayTasks'
import { TodoForm } from './components/TodoForm'



function App() {
  const [tasks, setTasks] = useState([])
  const onAddTask = (name, priority, date) => {
    const newTask = {
      name: name,
      priority: priority,
      date: date,
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className='container'>
      <TodoForm onAddTask={onAddTask}></TodoForm>
      <DisplayTasks tasks={tasks}></DisplayTasks>
    </div>
  )
}

export default App
