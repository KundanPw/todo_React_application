import {useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function AddTodo({addTodos}) {
    const {todos, setTodos } = useContext(TodoContext);
    const [todoText, setTodoText] = useState('');
    return(
        <div>
            <input 
                placeholder="Add your next todo......." 
                onChange={(e) => setTodoText(e.target.value)}
                value={todoText}
            />
            <button onClick= {()=>{
                let nextId = todos.length+1;
                setTodos([...todos, {id: nextId, text: todoText, isFinished: false}]);
                setTodoText('')
            }}>Submit</button>
        </div>
    );
}

export default AddTodo;
