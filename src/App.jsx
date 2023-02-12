import { useEffect, useState } from "react"
import { Link, Outlet, useLoaderData, useLocation } from "react-router-dom"

export default function App() {
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
    </div>
  )
}
