function TodoList({todo,setTodo}){


function handleEdit(id){
    let updated=todo.map((e)=>{
        return e.id===id?{...e,edit:!e.edit}:e
        
    })
    setTodo(updated)
    


}

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
        <div className="todo">
        <ul>
          {todo.map((t)=>{return(<>
          <li key={t.id}style={{
            textDecoration:t.done?'line-through':'',
            color:t.done?'green':'black',
            display:t.edit?'none':'block'
          }}  onDoubleClick={()=>handleToggle(t.id)}>
           
           <span style={{textDecoration:t.done?'line-through':''}} className="task"> {t.text}</span> 
            <button onClick={()=>handleEdit(t.id)}><i class="fa-solid fa-pencil"></i></button>
            <button onClick={()=>handleDelete(t.id)}><i class="fa-solid fa-trash"></i></button>
            <span className="date">{t.date}</span> 
            
            </li>
            <li style={
            {display:t.edit?'block':'none'}

            }>
                <input type="text" value={t.text} onChange={(e)=>{
                   let updated=todo.map((task)=>{
                    return task.id===t.id?{...task,text:e.target.value}:task

                   })
                   setTodo(updated)
                }}/>
                <button onClick={()=>handleEdit(t.id)}><i class="fa-solid fa-circle-check"></i></button>
                </li>
    
           </>)})}
        
    
    
        </ul></div>
      )
    }

    export default TodoList;