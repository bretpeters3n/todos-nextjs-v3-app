import { newTodo } from '@/utils/actions'

const NewTodoForm = ({}) => {
  return (
    <div>
      <form action={newTodo} className="flex flex-col gap-2 max-w-[300px]">
        <label htmlFor="todo">Todo</label>
        <input
          name="content"
          type="text"
          id="todo"
          className="border-2 border-black/20 rounded-md px-2 py-1"
        />
        <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default NewTodoForm
