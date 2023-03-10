import React from 'react';
import './App.css';
import InputField from './components/InputField';
import Todolist from './components/Todolist';
import { Todo } from './model';
//function compnents
const App: React.FC= ()=>{
  const [todo, settodo] = React.useState<string>("");

  //array of a type or interface
  const [todos, setTodos] = React.useState<Todo[]>([])
  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault();
if(todo){
    setTodos([...todos,{id:Date.now(),todo,isDone:false}])
  settodo("");
}
  };
console.log(todos);
  console.log(todo);
  return  ( 
  <div className="App">
    <span className="Heading">Taskify
    </span>
    <InputField todo={todo} setTodo={settodo} handleAdd={handleAdd}/>
    <Todolist todos={todos} setTodos={setTodos}/>
  </div>
  );
}; 

export default App;
