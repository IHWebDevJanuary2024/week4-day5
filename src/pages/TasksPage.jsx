
import TaskCard from '../components/TaskCard';


function TasksPage(props) {
    const tasksData = props.tasksData
    const setCount = props.setCount

    return (
        <div className='tasks-container'>
            {
                tasksData.map((task) => {
                    return (
                        <TaskCard key={task.id} setCount={setCount} task={task} />
                    )
                })
            }
        </div>
    )
}

export default TasksPage;