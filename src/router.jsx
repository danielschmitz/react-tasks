import { useParams } from "react-router-dom"
import App from "./App"
import config from "./config"
import EditTask from "./pages/edit-task"
import HelloWorld from "./pages/hello-world"
import ListTask from "./pages/list-task"
import NewTask from "./pages/new-task"

export default [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <ListTask />
            },
            {
                path: "/hello-world",
                element: <HelloWorld />
            },
            {
                path: "/new-task",
                element: <NewTask />
            },
            {
                path: "/edit-task/:id",
                element: <EditTask />
            }
        ]
    },
]