import React from 'react'
import { Todo } from '../model'
import './Styles.css'
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md"



type Props={
    todo : Todo,
    todos: Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>; 
}
export const SingleTodo = ({todo,todos,setTodos}:Props) => {

    const handleDone = (id:number)=>{};
    //setTodos(todos.map((todo)=>todo.id === id?{...Todolist,isDone:!Todolist.idDone}:todo))
  return (
    <form className="todos_single">
        <span className="todos_single--text">
            {todo.todo}</span>
        <div>
            <span className="icon">
                <AiFillEdit/>
            </span>
            <span className="icon">
                <AiFillDelete/>
            </span>
            <span className="icon" onClick={()=>handleDone(todo.id)}>
                <MdDone/>
            </span>
        </div>
    </form>
  )
}

export default SingleTodo;