import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import config from "./config"
import HelloWorld from "./pages/hello-world"
import NewTask from "./pages/new-task"
import service from "./service"

export default [
    {
        path: "/",
        element: <App />,
        loader: () => service.getAll(),
        children: [
            {
                path: "/hello-world",
                element: <HelloWorld />
            },
            {
                path: "/new-task",
                element: <NewTask />
            }
        ]
    },
]