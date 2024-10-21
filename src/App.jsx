import { useEffect, useState } from 'react'
import './App.css'
import TodoList from './component/TodoList/TodoList'
import AddTodo from './component/AddTodo/AddTodo'


function App() {
  const [todos, setTodos ]= useState([
    {id: 1, text: "todo1", isFinished: true},
    {id: 2, text: "todo2", isFinished: false},
  ]);

  function addTodos(todoText) {
    let nextId = todos.length + 1;
    setTodos([...todos, {id: nextId, text: todoText, isFinished: false }])
  }

  useEffect(()=> {
    console.log(todos)
  })
  return (
    <>
      <AddTodo addTodos = {addTodos} />
      <TodoList todos = {todos}  setTodos={setTodos}/>
    </>
  )
}

export default App
