import GoalInput from "./GoalInput"
import Popup from "./Popup"
import ListItem from "./ListItem"
import { useState } from "react"

export default function GoalsApp(){
    const [goal, setGoal] = useState({
        goal: '',
        plan: '',
        date: ''
    })
    const [goalList, setGoalList] = useState([])

    const [buttonPopup, setButtonPopup] = useState(false);
    

    function DoneTask(index){
        const updatedTasks = goalList.filter((_, i) => i !== index)
        setGoalList(updatedTasks)
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...goalList];
            [updatedTasks[index], updatedTasks[index - 1]] 
            = [updatedTasks[index - 1], updatedTasks[index]];
            setGoalList(updatedTasks);
        }

    }

    function moveTaskDown(index){
        if(index < goalList.length - 1 ){
            const updatedTasks = [...goalList];
            [updatedTasks[index], updatedTasks[index + 1]] 
            = [updatedTasks[index + 1], updatedTasks[index]];
            setGoalList(updatedTasks);
        }
    }
    const AddTask = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setGoal((prev) => {
            return {...prev, [name]: value}
        })
       
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setGoalList(g => [...g, goal])
        setGoal({
            goal:'',
            plan:'',
            date:''

        })
    }
        

    
    return (<div className="goals-app"> 
    <h1 className="mainTitle">Goals 2025</h1>
        <>
        <div> 
        <h3>
        <em className="quote">
        "If the plan doesn't work, change the plan, not the goal"
        </em>
        </h3>
        <span className="inputbox">
        <form onSubmit={handleSubmit}> <span className="goalInputTitle">
        Add Goal: <span></span>
       </span>
        <input className="ibox" placeholder="What is your goal..." type="text" value={goal.goal} name="goal" onChange={AddTask}></input> 
        <input  className="ibox" placeholder="What is your plan..." type="text" value={goal.plan} name="plan" onChange={AddTask}></input> 
        <input className="ibox" placeholder="When?" type="text" value={goal.date} name="date" onChange={AddTask}>
        </input> 
        <button className="addtask" type="submit">Add Task</button> 
        </form> </span>
        
        <ol>
            {goalList.map((goal, index) => 
            <li key={index}>
                
                
                        <span>
                        <h2>Goal: {goal.goal} </h2>
                        <h3> Achieve by: {goal.date}</h3>
                        <button onClick={() => setButtonPopup(true)}>Plan
                        </button>
                        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                         <h4 className="plantitle"> Plan for :{goal.goal}
                          </h4>
                          <h5 className="plan">{goal.plan}</h5>
                       </Popup>
                         <button className="upButton" onClick={() => moveTaskUp(index)}>🔺
                        </button>
                        <button className="downButton" onClick={() => moveTaskDown(index)}>🔻
                        </button> 
                        <button className="delete-btn" onClick={() => DoneTask(index)}>Delete</button>
                        
                       
                        </span>
                   
            </li>
            )}
        </ol>
        </div>
        </>
    
        </div>


    )
}