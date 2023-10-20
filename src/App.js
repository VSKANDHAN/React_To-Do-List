import React, { useRef, useState } from "react";
function App() {
  const [todo,setTodo]=useState([{id:1,text:'Add Your Task and hit submit',done:false}])

  return(
    <>
    <h1>Daily Ticks</h1>
    <AddToDo todo={todo} setTodo={setTodo}/>
    <TodoList todo={todo} setTodo={setTodo}/>
    </>
  )

}

function TodoList({todo,setTodo}){



function handleDelete(id){
  let confirm=window.confirm('Sure wanna delete this task')
  if(confirm){
    
let filtered=todo.filter((e)=>e.id!==id)
setTodo(filtered)

  }

}
function handleToggle(id){
let completedTodo=todo.map((t)=>{
  return t.id===id?{...t,done:!t.done}:t
})
setTodo(completedTodo)
}

 
  return(
    <ul>
      {todo.map((t)=>{return(<>
      <li key={t.id}style={{
        textDecoration:t.done?'line-through':'',
        color:t.done?'green':'black'
      }}  onDoubleClick={()=>handleToggle(t.id)}>{t.text} <span className="date">{t.date}</span> <button onClick={()=>handleDelete(t.id)}>Delete</button></li>

       </>)})}
    


    </ul>
  )
}


function AddToDo({todo,setTodo}){
  let now=new Date()
  const inputRef=useRef()
  function handleAddTodo(e){
    e.preventDefault()
let date=now.getDate()
let month=now.getMonth()
let year=now.getFullYear()
let formatedDate=`${date}:${month}:${year}`
    let text=e.target.todo.value
    if(!text){
      alert('Cant Add the Empty Task to the List')
    }
 
    else{
      let updatedTodo={
        id:Math.random(),
        text,
        date:formatedDate,
        done:false
  
      }
    setTodo(()=>todo.concat(updatedTodo))
    inputRef.current.value=" "


    }
    
    

  }
  return(
    <form onSubmit={handleAddTodo}>

      <input type="text" name="todo" ref={inputRef}  placeholder="Add Your Task Here!"/>
      <input  type="submit"/>
    </form>
  )
}


export default App;
