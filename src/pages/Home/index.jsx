import React, { useState, useEffect } from 'react'
import TodoForm from '../../components/form/TodoForm'
import TodoList from '../../components/form/TodoList'

export default function Home(){
    const [todos, setTodos] = useState(() => {
        const items = localStorage.getItem("TODOS")
        if(items == null) return []
        return JSON.parse(items)
    })

    useEffect(() => {
        localStorage.setItem("TODOS", JSON.stringify(todos))
    }, [todos])

    function addTodo(title){
        setTodos(currentTodoList => {
            return [
                ...currentTodoList,
                {id: crypto.randomUUID(), title, completed: false}
            ]      
        }
      )
    }
    
    function toggleCheckbox(id, completed){
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if(todo.id === id){
                    return {...todo, completed}
                }
                return todo
            })
        })
    }

    function deleteTodo(id){
        setTodos(currentTodoList => {
            return currentTodoList.filter(todo => todo.id !== id)
        })
    }

    return (
        <>
        <TodoForm onSubmit={addTodo} />
        <TodoList todos={todos} toggleCheckbox={toggleCheckbox} deleteTodo={deleteTodo}/>
        </>
    )
}