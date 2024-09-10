import React from 'react'
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function NewTodoForm(props) { //can be ( {onSubmit} ) and take out prop on prob.onSubmit, destructuring method
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return
    props.onSubmit(newItem)

    setNewItem("")
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">What to do?</label>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
    </>
  )
}