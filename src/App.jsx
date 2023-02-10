import { Link, Outlet, useLoaderData } from "react-router-dom";
import TaskList from "./components/task-list"

export default function App() {
  const tasks = useLoaderData();

  const handleTaskChanged = task => {
    console.log('handleTaskChanged', task);
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
