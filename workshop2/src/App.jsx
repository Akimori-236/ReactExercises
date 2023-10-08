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

  const onDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <div className='container'>
      <TodoForm onAddTask={onAddTask}></TodoForm>
      <DisplayTasks tasks={tasks} onDeleteTask={onDeleteTask}></DisplayTasks>
    </div>
  )
}

export default App
