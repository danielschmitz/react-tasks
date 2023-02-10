import { useEffect, useState } from "react"
import { Link, Outlet, useLoaderData, useLocation } from "react-router-dom"
import TaskList from "./components/task-list"
import service from "./service"

export default function App() {
  const [tasks, setTasks] = useState([])

  const handleTaskChanged = async task => {
    const data = await service.update(task)
    console.log('updated', data)
  }

  const location = useLocation() // hack to reload data every time the page is re-rendered
  useEffect(() => {
    service
      .getAll()
      .then(response => response.json())
      .then(data => setTasks(data))
  }, [location.key])

  return (
    <div className="container">
      <nav>
        <ul>
          <li><h1>Task List</h1></li>
        </ul>
        <ul>
          <li><Link role="button" to='/new-task'>New</Link></li>
        </ul>
      </nav>
      <Outlet></Outlet>
      {tasks.length > 0 ? <TaskList tasks={tasks} onTaskChanged={handleTaskChanged} /> : ''}
    </div>
  )
}
