import React, {useState } from "react";

import TodoList from "./TodoList";
import AddToDo from "./AddTodo";
function App() {
  const [todo,setTodo]=useState([{id:1,text:'Add Your Task and hit submit & DoubleClick to mark as Done',done:false,edit:false}])

  return(
    <>
    <h1>Daily Ticks</h1>
    <AddToDo todo={todo} setTodo={setTodo}/>
   
    <TodoList todo={todo} setTodo={setTodo}/>
    </>
  )

}
export default App;
