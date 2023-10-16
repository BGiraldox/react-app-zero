import TodoItem from "./TodoItem"

export default function TodoList({todos, toggleCheckbox, deleteTodo}){

    return (
        <>
        <h1>ToDo List</h1>
        <ul>
            {todos.length === 0 && "No Todos"}
            { todos.map(todo => {
              return  <TodoItem {...todo} key={todo.id} toggleCheckbox={toggleCheckbox} deleteTodo={deleteTodo} />
              }
             )
            }
        </ul>
        </>
    )
}