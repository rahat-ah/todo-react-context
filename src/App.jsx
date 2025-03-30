import { userContext } from './context/context'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { useState } from 'react'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev)=> {
      return [{id:Date.now(), ...todo}, ...prev]
    })
  }
  
  const updateTodo = (id,todo) => {
    setTodos((prev)=> {
      return prev.map((prevTodo)=> prevTodo.id === id ? todo : prevTodo)
    })
  }

  const deleteTodo = (id) =>{
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo,completed: !prevTodo.completed } :prevTodo))
  }

  return (
    <userContext.Provider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  <TodoItem />
              </div>
          </div>
      </div>
    </userContext.Provider>
  )
}

export default App
