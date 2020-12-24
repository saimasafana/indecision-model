import React,{useState} from 'react';
import './App.css';
function App() 
{
    const [task, setTask] = useState("")
    const [tasklist,setTasklist]=useState([]);
    const handleChange = (e) => 
    {
          setTask(e.target.value);
    };
    const AddTask = () => 
    {
        if(task!=="")
        {
            const taskDetails={id:Math.floor(Math.random()*1000),
                value:task,
                isCompleted:false
                              }
            setTasklist([...tasklist,taskDetails]);
        }
    };
    const deletetask = (t,id)=>
    {
    t.preventDefault();
    setTasklist(tasklist.filter((t)=>t.id!==id));
    };

    return(
        
            <div className="main-container">
        
            <div className="add-taskbox">
            
        <input className="additem-input" type="text" name="text" id="text" onChange={(e) => handleChange(e)} 
              placeholder="Add task here.."/> 
              </div>
              
                <div className="opton">
                  <button className="add-button" onClick={AddTask}>AddOption</button>
                  </div>
            
            {tasklist !==[] ?(
            <ul>
                {tasklist.map((t) =>(<li className="item-container">{t.value}
                <button className="delete"onClick={(e)=> deletetask(e,t.id)}>Remove</button></li>
                ))}
                </ul>
                ):null}
                
            
        </div>
        );
}




export default App;
