import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
import service from "../service"
import TaskList from "../components/task-list"
import { useEffect, useState } from "react"

export async function loader() {
    return service.getAll()
  }

export default function ListTask() {
    
    //const [tasks, setTasks] = useState([])

    const tasks = useLoaderData();

    const handleTaskChanged = async task => {
        await service.update(task)
    }

    const navigate = useNavigate();
    const handleTaskDelete = async id => {
        await service.delete(id).then(() => navigate('/'))
    }

    // const location = useLocation() // hack to reload data every time the page is re-rendered
    // useEffect(() => {
    //     service
    //         .getAll()
    //         .then(response => response.json())
    //         .then(data => setTasks(data))
    // }, [location.key])

    return tasks.length > 0 ? <TaskList tasks={tasks} onTaskChanged={handleTaskChanged} onTaskDelete={handleTaskDelete}/> : 'No tasks'

};
