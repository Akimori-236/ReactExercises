import { useState } from 'react'
import './App.css'
import { DisplayTasks } from './components/DisplayTasks'
import { TodoForm } from './components/TodoForm'



function App() {
  const [tasks, setTasks] = useState([])
  const onAddTask = (name, priority, date) => {
    console.log(name)
    console.log(priority)
    console.log(date)
  }
  return (
    <div className='container'>
      <TodoForm onAddTask={onAddTask}></TodoForm>
      <DisplayTasks tasks={tasks}></DisplayTasks>
    </div>
  )
}

export default App
