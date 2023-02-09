import { Outlet, Link } from "react-router-dom";

export default function App() {

  return (
    <div className="container">
      <nav>
        <ul>
          <li><strong>Todo List</strong></li>
        </ul>
        <ul>
          <li><Link role="button" to='/new-task'>New</Link></li>
        </ul>
      </nav>
      <Outlet></Outlet>
      <article>
        todos....
        </article>
    </div>
  )
}
