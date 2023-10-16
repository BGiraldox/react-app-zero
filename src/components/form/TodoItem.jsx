export default function TodoItem({completed, id, title, toggleCheckbox, deleteTodo}){
    
    return (<>
    <li>
        <input type="checkbox" checked={completed} 
               onChange={e => toggleCheckbox(id, e.target.checked)}></input>
        <span>{title}</span>
        <button onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    </>)
}