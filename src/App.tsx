import React from "react"
import { useEffect, useState } from "react"
import { Routes, Route } from 'react-router-dom'
// import './global.css'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App

/** TODOLIST FORM */

// import { NewTodoForm } from './components/NewTodoForm'
// import { TodoList } from "./components/TodoList"
// import "./styles.css"


// const [todos, setTodos] = useState(() => {
//   const localValue = localStorage.getItem("ITEMS")
//   if (localValue == null) return []

//   return JSON.parse(localValue)
// })

// useEffect(() => {
//   localStorage.setItem("ITEMS", JSON.stringify(todos))
// }, [todos])

// function addTodo(title) {
//   setTodos((currentTodos) => {
//     return [
//       ...currentTodos,
//       { id: crypto.randomUUID(), title, completed: false }]
//   })
// }

// function toggleTodo(id, completed) {
//   setTodos(currentTodos => {
//     return currentTodos.map(todo => {
//       if (todo.id === id) {
//         return { ...todo, completed }
//       }
//       return todo
//     })
//   })
// }

// function deleteTodo(id) {
//   setTodos(currentTodos => {
//     return currentTodos.filter(todo => todo.id !== id)
//   })
// }

// return (
//   <main>
//     <NewTodoForm onSubmit={addTodo} />
//     <h1 className="header">Todo List</h1>
//     <TodoList
//       todos={todos}
//       toggleTodo={toggleTodo}
//       deleteTodo={deleteTodo}
//     />
//   </main>
// )