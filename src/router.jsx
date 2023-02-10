import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import config from "./config"
import HelloWorld from "./pages/hello-world"
import NewTask from "./pages/new-task"

export default [
    {
        path: "/",
        element: <App />,
        loader: async () => {
            return fetch(`${config.api}/tasks/`);
          },
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