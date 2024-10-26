import {useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function AddTodo({addTodos}) {
    const {todos, dispatch } = useContext(TodoContext);
    const [todoText, setTodoText] = useState('');

    function addTodo(todoText) {
       return dispatch({type:'add_todo', payload: {todoText}})
    }
    return(
        <div>
            <input 
                placeholder="Add your next todo......." 
                onChange={(e) => setTodoText(e.target.value)}
                value={todoText}
            />
            <button onClick= {()=>{
                addTodo(todoText)
                setTodoText('')
            }}>Submit</button>
        </div>
    );
}

export default AddTodo;
