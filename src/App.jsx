import { useEffect, useState } from "react"
import { Routes, Route } from 'react-router-dom'
// import { NewTodoForm } from './components/NewTodoForm'
// import { TodoList } from "./components/TodoList"
import { SigninForm } from './_auth/forms/SigninForm'
import { SignupForm } from './_auth/forms/SignupForm'
import "./styles.css"
import AuthLayout from "./_auth/AuthLayout"
// import './global.css'


const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        { /* public routes */}
        <Route element={<AuthLayout}>
          <Route path="/sign-in" element={<SignupForm />} />
          <Route path="/sign-in" element={<SigninForm />} />
        </Route>

        { /* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
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
  //   <main className="flex h-screen">
  //     <NewTodoForm onSubmit={addTodo} />
  //     <h1 className="header">Todo List</h1>
  //     <TodoList
  //       todos={todos}
  //       toggleTodo={toggleTodo}
  //       deleteTodo={deleteTodo}
  //     />
  //   </main>
  // )
}

export default App

