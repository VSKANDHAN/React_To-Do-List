import React, { useRef} from "react";

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
        <div className="form">
      <form onSubmit={handleAddTodo}>
  
        <input type="text" name="todo" ref={inputRef}  placeholder="Add Your Task Here!"/>
        <input  type="submit"/>
      </form></div>
    )
  }

  export default AddToDo;