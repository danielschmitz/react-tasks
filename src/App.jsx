import { Link, Outlet, useLoaderData } from "react-router-dom";
import TaskList from "./components/task-list"
import service from "./service"

export default function App() {
  const tasks = useLoaderData();

  const handleTaskChanged = async task => {
    const data = await service.update(task)   
    console.log('updated',data)
  }

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
      <TaskList tasks={tasks} onTaskChanged={handleTaskChanged}/>
    </div>
  )
}
