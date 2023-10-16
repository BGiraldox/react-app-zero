import { useState } from "react"
export default function TodoForm({onSubmit}){

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
      e.preventDefault()
      if(newItem === "") return
      onSubmit(newItem)
      setNewItem("")
    }

    return <form onSubmit={handleSubmit}>
            <h3>New Item</h3>
            <input type="text" value={newItem} 
                onChange={e => setNewItem(e.target.value)}/>
            <button>Add</button>
          </form>

}