'use client'
import { useTransition } from 'react'
import { completeTodo } from '../utils/actions'

const Todo = ({ todo }: { todo: Todo }) => {
  const [isPending, startTransition] = useTransition()

  const handleComplete = () => {
    startTransition(() => {
      completeTodo(todo.id)
    })
  }
  return (
    <div
      className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  )
}

export default Todo
