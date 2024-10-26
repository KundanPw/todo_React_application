import { useEffect, useReducer, useState } from 'react'
import './App.css'
import TodoList from './component/TodoList/TodoList'
import AddTodo from './component/AddTodo/AddTodo'
import TodoContext from './context/TodoContext'
import TodoReducer from './reducers/TodoReducer'


function App() {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  useEffect(()=> {
    console.log(todos)
  })
  return (
    <>
      <TodoContext.Provider value={{todos, dispatch}}>
        <AddTodo />
        <TodoList />
      </TodoContext.Provider>
    </>
  )
}

export default App
