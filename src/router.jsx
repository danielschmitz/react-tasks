import { useParams } from "react-router-dom"
import App from "./App"
import config from "./config"
import EditTask, { EditTaskLoader } from "./pages/edit-task"
import HelloWorld from "./pages/hello-world"
import ListTask, { ListTasksLoader} from "./pages/list-task"
import NewTask from "./pages/new-task"

export default [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                loader: ListTasksLoader,
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
                loader: EditTaskLoader,
                element: <EditTask />
            }
        ]
    },
]