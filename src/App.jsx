import { useEffect, useState } from 'react'
import './App.css'
import TodoList from './component/TodoList/TodoList'
import AddTodo from './component/AddTodo/AddTodo'
import TodoContext from './context/TodoContext'


function App() {
  const [todos, setTodos ]= useState([]);

  useEffect(()=> {
    console.log(todos)
  })
  return (
    <>
      <TodoContext.Provider value={{todos, setTodos}}>
        <AddTodo />
        <TodoList />
      </TodoContext.Provider>
    </>
  )
}

export default App
