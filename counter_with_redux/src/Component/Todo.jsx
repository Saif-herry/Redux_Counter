import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodos } from '../Redux/action'
const Todo = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const { todo } = useSelector((store) => store)
  console.log('todo1:', todo)

  const addTodo = () => {
    const data = {
      id: todo.length + 1,
      todo: input,
      status: false,
    }

    dispatch(addTodos(data))
    console.log('todo2:', todo)
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          placeholder="Enter your name..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </>
  )
}
export default Todo
