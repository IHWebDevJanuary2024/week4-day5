import { useState } from "react";

function TaskCard(props) {
    const task = props.task;
    const [taskIsDone, setTaskIsDone] = useState(task.isDone)

    const handleTaskClick = () => {
        if (taskIsDone) {
            props.setCount((current) => current - 1)
        } else {
            props.setCount((current) => current + 1)
        }
        setTaskIsDone(!taskIsDone)
    }

    return (
        <div>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p>{taskIsDone ? '✅' : '💩'}</p>
            <button onClick={() => { handleTaskClick() }}>{!taskIsDone ? "DONE!" : "NOT DONE"}</button>
        </div>
    )
}

export default TaskCard;