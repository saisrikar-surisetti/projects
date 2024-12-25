export default function GoalInput(){
   
    return(
        <>
        <div> 
        <h1 className="toptittle">
        <em className="quote">
        "If the plan doesn't work, change the plan, not the goal"
        </em>
        </h1>
        <span className="inputstuff "> 
        <h2 className="goalInputTitle">
        Add Goal:
        </h2>
        <input placeholder="What is your goal..." type="text"></input> 
        <input placeholder="What is your plan..." type="text"></input> 
        <input type="date">
        </input> 
        <button className="addtask">Add Task</button>
        </span>
       
        </div>
        </>
       
    )

}