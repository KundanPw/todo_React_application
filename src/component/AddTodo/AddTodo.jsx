import { useState } from "react";

function AddTodo({addTodos}) {
    const [todoText, setTodoText] = useState('');
    return(
        <div>
            <input 
                placeholder="Add your next todo......." 
                onChange={(e) => setTodoText(e.target.value)}
                value={todoText}
            />
            <button onClick= {()=>{
                addTodos(todoText)
                setTodoText('')
            }}>Submit</button>
        </div>
    );
}

export default AddTodo;
